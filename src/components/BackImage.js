import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default ({ children }) => (
  <ImageBackground
    source={require('../../assets/images/login-background.jpg')}
    style={styles.container}
  >
    {children}
  </ImageBackground>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    padding: 20
  }
});
