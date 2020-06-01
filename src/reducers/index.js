import globalReducer from './global-reducer';
import userReducer from './user-reducer';

export default {
  global: globalReducer.reducer,
  user: userReducer.reducer,
};
