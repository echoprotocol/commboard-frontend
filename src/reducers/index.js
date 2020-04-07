import { reducer as modal } from 'redux-modal';
import GlobalReducer from './global-reducer';


export default {
  modal,
  global: GlobalReducer.reducer,
};
