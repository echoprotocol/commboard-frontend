import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default function initializeStore(initialState) {
  return createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
