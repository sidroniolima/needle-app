import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet, 
  View } from 'react-native';
import BackImage from './BackImage';
import LoginForm from './LoginForm';

class Login extends Component
{
  render()
  {
    return (
      <BackImage>
        
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <LoginForm />
      </BackImage>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  logoContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 140,
    height: 140
  }
})