import * as actionTypes from '../types';

// ACTIONS
export const isFileLoading = (isFileLoading) => (dispatch) => {
  return dispatch({ type: actionTypes.ISLOADING, payload: { isFileLoading } });
}
;
