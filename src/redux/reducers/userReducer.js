import { SET_USER_PROFILE } from '../actions/userActions';

const defaultProfile = null;

function userReducer(state = defaultProfile, action) {
  switch(action.type) {
    case SET_USER_PROFILE: {
      console.log('ddddd', action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;