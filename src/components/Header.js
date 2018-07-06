import React from 'react';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { logout } from '../actions';

class Header extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  onButtonPress = () =>
  {
    this.props.logout();
    NavigationActions.login();
  }

  render(){
    return (
      <View style={styles.view}>
        <View style={{flex:1}}> 
          <Image style={{width: 24, height: 24}} source={require('../images/logo-mobile-+.png')}/>
        </View>

        <View style={styles.menu}> 
          <TouchableOpacity 
            style={styles.button}
            onPress={this.onButtonPress}>
            <Image style={{width: 18, height: 18}} source={require('../images/logout.png')}/>
          </TouchableOpacity>
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
	view: 
	{
    flex: 1,     
    padding:10,
    paddingTop: 30,
    paddingBottom: 5,
    justifyContent: 'flex-end',
		flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
  },
  menu: {
    flex:2,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  button: {
    alignItems: 'center',
    padding: 2
  }
});

export default connect(null, { logout })(Header);