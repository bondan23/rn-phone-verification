import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
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

describe('Todo Reducer Tests',()=>{
  it('has a default state',()=>{
    expect(reducer(undefined,{type:'expected'})).toEqual(initialState)
  })

  it('case FETCH_ALL_TODO',()=>{
    const action = reducer(undefined,{type:FETCH_ALL_TODO,payload})
    expect(action.list.length).toEqual(2)
  })

  //delete temporary
  it('case DELETE_TODO',()=>{
    const initial = {
      ...initialState,
      list:payload
    }

    const action = reducer(initial,{type:DELETE_TODO,payload:0})
    expect(action.list.length).toEqual(1);
    expect(action.trash.length).toEqual(1);
    const action2 = reducer(action,{type:DELETE_TODO,payload:0})
    expect(action2.list.length).toEqual(0);
    expect(action2.trash.length).toEqual(2);
  })

  //permanently delete all todo inside trash
  it('case FORCE_DELETE_TODO',()=>{
    const initial = {
      ...initialState,
      trash:payload
    }

    const action = reducer(initial,{type:FORCE_DELETE_TODO});
    expect(action.trash.length).toEqual(0)
  })
})
