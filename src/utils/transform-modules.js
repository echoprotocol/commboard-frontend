import clone from 'lodash.clone';
import PropTypes from 'prop-types';
import { propCheck } from 'redux-modules-middleware';

const TransformModules = (defaultFields) => ({
  set: {
    middleware: [
      propCheck({
        field: PropTypes.string,
        value: PropTypes.any,
      }),
    ],
    reducer: (state, { payload }) => ({
      ...state,
      [payload.field]: payload.value,
    }),
  },
  setMultiple: {
    reducer: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  clear: {
    reducer: () => ({ ...defaultFields }),
  },
  clearByField: {
    middleware: [
      propCheck({
        field: PropTypes.string,
      }),
    ],
    reducer: (state, { payload }) => ({
      ...state,
      [payload.field]: clone(defaultFields[payload.field], true),
    }),
  },
});

export default TransformModules;
