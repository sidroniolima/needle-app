import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './src/reducers';

import Router from './Router';

export default class App extends React.Component 
{
  inicializeFirebase() 
  {
    var config = {
      apiKey: "AIzaSyDmwlPQcrGkN5YrbIf5MLh3P1AXKV-vftU",
      authDomain: "tetrati-needle-app.firebaseapp.com",
      databaseURL: "https://tetrati-needle-app.firebaseio.com",
      projectId: "tetrati-needle-app",
      storageBucket: "tetrati-needle-app.appspot.com",
      messagingSenderId: "1098852224469"
    };

    firebase.initializeApp(config);
  }

  render() {
    this.inicializeFirebase();

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}