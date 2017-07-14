import { combineReducers } from 'redux';

import todo from '@redux/todo/reducer';
import nav from '@redux/nav/reducer';

const rootReducer = combineReducers({
  todo,
  nav
})

export default rootReducer
