import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  TextInput, 
  TouchableOpacity } from 'react-native';
import { connect } from  'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUser, loginWithFacebook } from '../actions/AuthAction';

class LoginForm extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      user: 'sidronio@hotmail.com',
      password: '123456'
    }
  }

  onRegisterPress()
  {
    Actions.cadastro();
  }

  onLoginPress()
  {
    this.props.loginUser(this.state);
  }

  onLoginWithFacebookPress()
  {
    console.log('PRESS LOGIN FACE');
    this.props.loginWithFacebook();
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
          onChange={(value) => this.setState( {user: value} )}
          value={this.state.user}
        />

        <TextInput 
          type="password"
          underlineColorAndroid="transparent"
          placeholder="Senha"
          style={styles.textInput}
          onChange={(value) => this.setState( {password: value} )}
          value={this.state.password}
        />

        <TouchableOpacity 
          style={styles.loginFaceBtn}
          onPress={ () => this.onLoginWithFacebookPress() }
        >
          <Text>Entrar com Facebook</Text>
        </TouchableOpacity>        

        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={ () => this.onLoginPress() }
        >
          <Text>Entrar com usário e senha</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerBtn}
          onPress={ () => this.onRegisterPress() }
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
  },
  loginFaceBtn:{
    backgroundColor: '#3b5998',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  }
});

export default connect(null, { loginUser, loginWithFacebook })(LoginForm);