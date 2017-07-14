import { FETCH_ALL_TODO } from '@types/';

export function fetchAllTodo(payload){
  return {
    type:FETCH_ALL_TODO,
    payload
  }
}
