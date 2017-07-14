import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { fetchAllTodo } from '@redux/todo/actions';
import reducer from '@redux/todo/reducer';
import {
  FETCH_ALL_TODO,
  DELETE_TODO,
  FORCE_DELETE_TODO
} from '@types/';

const initialState = {
  list:[],
  trash:[]
}

const payload = [
  {id:1,task:'Watch Iron Man'},
  {id:2,task:'Cook Noodle'}
]

describe('Todo Action Test',()=>{

  it('dispatch fetchAllTodo',()=>{
    const action = fetchAllTodo(payload);
    expect(action).toMatchObject({
      type:FETCH_ALL_TODO,
      payload
    })
  })

  it('dispatch fetchAllTodo with the reducer',()=>{
    const action = reducer(undefined,fetchAllTodo(payload));
    expect(action.list.length).toEqual(2)
  })

})
