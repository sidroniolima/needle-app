import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { tryLogin } from '../actions/AuthAction';
import BackImage from './BackImage';

class SplashScreen extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = { 
      timer: null
    };
  }

  componentDidMount()
  { 
    console.log(new Date())  ;
    this.props.tryLogin();

    let timer = setInterval(() => {
      this.verifyLogin();
    }, 5000);

    this.setState({timer});
  }

  verifyLogin()
  {
    console.log(new Date())  ;
    clearInterval(this.state.timer);

    if (this.props.user)
    {
      Actions.principal();
    } else
    {
      Actions.auth();
    }
  }

  componentWillUnmount()
  {
    clearInterval(this.state.timer);
  }

  render()
  {
    return (
      <BackImage/>
    )
  }
} 

const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps, { tryLogin })(SplashScreen);