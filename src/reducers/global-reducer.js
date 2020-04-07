import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import cloneDeep from 'lodash.clonedeep';

import TransformModules from '../utils/transform-modules';
import { DEFAULT_TITLE } from '../constants/global-constants';

const DEFAULT_FIELDS = Map({
  title: DEFAULT_TITLE,
});

export default createModule({
  name: 'global',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
