import { SET_USER_PROFILE, SET_USER_LOCATION } from '../actions/userActions';

const defaultProfile = null

function userReducer(state = defaultProfile, action) {
  switch(action.type) {
    case SET_USER_PROFILE: {
      return action.payload;
    }
    case SET_USER_LOCATION: {
      return {...state, coords: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default userReducer;