import { FETCH_ALL_TODO, DELETE_TODO, FORCE_DELETE_TODO } from '@types/';

const initialState = {
  list:[],
  trash:[]
}

export default function todoReducer(state=initialState,action){
  switch(action.type){
    case FETCH_ALL_TODO:
      return {
        ...state,
        list:action.payload
      }
    case DELETE_TODO:
      return {
        list:[
          ...state.list.slice(0,action.payload),
          ...state.list.slice(action.payload+1)
        ],
        trash:[
          ...state.trash,
          state.list[action.payload]
        ]
      }
    case FORCE_DELETE_TODO:
      return {
        ...state,
        trash:[]
      }
    default:
      return state;
  }
}
