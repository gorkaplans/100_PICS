import { SET_THEME } from '../actions/themeActions';

const defaultTheme = "dia"

function themeReducer(state = defaultTheme, action) {
  switch(action.type) {
    case SET_THEME: {
      return action.payload;
    }
   default: {
      return state;
    }
  }
}

export default themeReducer;