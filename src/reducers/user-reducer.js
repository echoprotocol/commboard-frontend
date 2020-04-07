import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import cloneDeep from 'lodash.clonedeep';

import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  name: 'username',
});

export default createModule({
  name: 'user',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
