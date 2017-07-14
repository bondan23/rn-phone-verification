import { combineReducers } from 'redux';

import todo from '@redux/todo/reducer';

const rootReducer = combineReducers({
  todo
})

export default rootReducer
