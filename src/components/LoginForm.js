import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  TextInput, 
  TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component
{

  onRegisterPress()
  {
    Actions.cadastro({type: 'reset'});
  }

  render()
  {
    return (
      <View 
        style={styles.loginFormContainer}
      >

        <TextInput 
          underlineColorAndroid="transparent"
          placeholder="Login"
          style={styles.textInput}
        />

        <TextInput 
          underlineColorAndroid="transparent"
          placeholder="Senha"
          style={styles.textInput}
        />

        <TouchableOpacity style={styles.loginBtn}>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerBtn}
          onPress={ this.onRegisterPress }
        >
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.forgotBtn}
          onPress={ () => console.log('esqueceu') }
        >
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormContainer: {
    alignItems: 'stretch',
  },
  textInput:{
    color: '#fff',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    borderColor: "#fff",
    borderWidth: 0.6
  },
  loginBtn: {
    backgroundColor: '#ecf0f1',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  },
  registerBtn: {
    backgroundColor: '#bdc3e7',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  },
  forgotBtn:{
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  }
});

export default LoginForm;