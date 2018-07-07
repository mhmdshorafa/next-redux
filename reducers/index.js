import { combineReducers } from 'redux';

import { clockReducer } from './clockReducers/index';
const rootReducer = combineReducers({
  clock: clockReducer
});

export default rootReducer;
