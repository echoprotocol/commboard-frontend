import { createModule } from 'redux-modules';
import clone from 'lodash.clone';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = {
  menu: '',
};

export default createModule({
  name: 'global',
  initialState: clone(DEFAULT_FIELDS, true),
  transformations: {
    ...clone(TransformModules(DEFAULT_FIELDS), true),
  },
});
