import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index';

const uplaodFileStatusInitialState = {
  uploadFile: false
};

export function initializeStore (initialState = uplaodFileStatusInitialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
