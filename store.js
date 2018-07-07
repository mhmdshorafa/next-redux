import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index'

const clock = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export function initializeStore (initialState = clock) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
