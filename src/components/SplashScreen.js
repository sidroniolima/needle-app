import React from 'react';
import { Actions } from 'react-native-router-flux';
import BackImage from './BackImage';

class SplashScreen extends React.Component
{
  constructor(props)
  {
    super(props);

    state = { 
      timer: null
    };
  }

  componentDidMount()
  {
    // try to login
    let timer = setInterval(this.goLogin, 3000);
    this.setState({timer});
  }

  goLogin()
  {
    Actions.login();
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

export default SplashScreen;