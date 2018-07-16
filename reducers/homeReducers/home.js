import * as actionTypes from '../../actions/types';
const uplaodFileStatusInitialState = {
  isFileLoading: false
};
// REDUCERS
export const uploadFileReducer = (state = uplaodFileStatusInitialState, action) => {
  switch (action.type) {
  case actionTypes.ISLOADING:
    return {
      isFileLoading: action.payload.isFileLoading
    };
  default: return state;
  }
};
