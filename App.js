import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';

import Router from './Router';

export default class App extends React.Component 
{
  render() 
  {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={ store }>
        <View style={{flex:1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}