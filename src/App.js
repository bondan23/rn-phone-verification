import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import logger from 'redux-logger';

import Landing from '@components/Landing';
import Card from '@test/Card';
import AppWithNavigationState from '@navigators/AppNavigator';
import rootReducer from '@redux/';

import { fetchAllTodo } from '@redux/todo/actions';

const initialState = {
  todo:{
    list:[],
    trash:[]
  }
}
const enchancer = applyMiddleware(logger);
const store = createStore(rootReducer,initialState,enchancer)

const LandingPage = connect(({todo})=>{
  return{
    todo
  }
},(dispatch)=>{
  return {
    fetchAllTodo: (payload) => {
      dispatch(fetchAllTodo(payload))
    }
  }
})(Landing)

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
