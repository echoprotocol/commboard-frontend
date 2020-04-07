import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { propCheck } from 'redux-modules-middleware';
import cloneDeep from 'lodash.clonedeep';

const TransformModules = (defaultFields) => ({
  set: {
    middleware: [
      propCheck({
        field: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        value: PropTypes.any,
        isFromJS: PropTypes.bool,
      }),
    ],
    reducer: (state, { payload }) => {
      if (Array.isArray(payload.field)) {
        state = state.setIn(payload.field, payload.isFromJS ? fromJS(payload.value) : payload.value);
      } else {
        state = state.set(payload.field, payload.isFromJS ? fromJS(payload.value) : payload.value);
      }
      return state;
    },
  },
  setMultiple: {
    reducer: (state, { payload }) => {
      Object.keys(payload).forEach((field) => {
        state = state.setIn(field.toString().split('.'), payload[field]);
      });
      return state;
    },
  },
  clear: {
    reducer: () => cloneDeep(defaultFields),
  },
  clearByField: {
    middleware: [
      propCheck({
        field: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      }),
    ],
    reducer: (state, { payload }) => {
      state = state.set(payload.field, cloneDeep(defaultFields[payload.field]));
      return state;
    },
  },
});

export default TransformModules;
