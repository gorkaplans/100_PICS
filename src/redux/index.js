import { combineReducers } from 'redux';

import userReducer from './reducers/userReducer';
import themeReducer from './reducers/themeReducers'

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
});

export default rootReducer;