import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { AppLoading, Font } from 'expo';

import reducers from './src/reducers';

import Router from './Router';

const cacheFonts = (fonts) => 
{
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component 
{
  state = {
    isReady: false
  };

  async _loadAssetsAsync()
  {
    const MaterialIcons = {'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf')};

    fontAssets = cacheFonts([MaterialIcons]);

    await Promise.all([...fontAssets]);
  }

  inicializeFirebase() 
  {
    var config = {
      apiKey: "AIzaSyDmwlPQcrGkN5YrbIf5MLh3P1AXKV-vftU",
      authDomain: "tetrati-needle-app.firebaseapp.com",
      databaseURL: "https://tetrati-needle-app.firebaseio.com",
      projectId: "tetrati-needle-app",
      name: 'needle-app',
      storageBucket: "tetrati-needle-app.appspot.com",
      messagingSenderId: "1098852224469"
    };

    firebase.initializeApp(config);
  }

  render() {
    if (!this.state.isReady)
    {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    if (!firebase.apps.length)
      this.inicializeFirebase();

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}