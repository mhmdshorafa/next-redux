import * as actionTypes from '../../actions/types';
const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}
// REDUCERS
export const clockReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return  {
        ...state,
         ...{
        lastUpdate: action.ts,
        light: !!action.light
      }
    }
    default: return state
  }
}