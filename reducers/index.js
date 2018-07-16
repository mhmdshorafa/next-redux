import { combineReducers } from 'redux';

import { uploadFileReducer } from './homeReducers/index';
const rootReducer = combineReducers({
  uploadFile: uploadFileReducer
});

export default rootReducer;
