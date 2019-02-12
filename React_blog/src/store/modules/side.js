import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const SIDE_ON = 'side/SIDE_ON';
const SIDE_OFF = 'side/SIDE_OFF';
const TOGGLE = 'side/TOGGLE';

// action creators
export const sideOn = createAction(SIDE_ON);
export const sideOff = createAction(SIDE_OFF);
export const toggle = createAction(TOGGLE);

// initial state
const initialState = Map({
  visible: false
});

// reducer
export default handleActions(
  {
    [TOGGLE]: (state, action) => {
      //  const { name, value } = action.payload;
      return state.updateIn(['visible'], visible => !visible);
    }
  },
  initialState
);
