import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationBar } from 'react-native-router-flux';

export default (props) => (
  <NavigationBar      
    centerComponent = { () => (<Text>{props.title}</Text>) }
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navBarTitle}
    barButtonTextStyle={styles.barButtonTextStyle}
    barButtonIconStyle={styles.barButtonIconStyle}
  />
);

const styles = StyleSheet.create({
	navBar:
	{
		backgroundColor: '#e74c3c'
	},
	navBarTitle: {
		color: '#FFFFFF'
	},
	barButtonTextStyle: {
		color: '#FFFFFF'
	},
	barButtonIconStyle: {
		tintColor: 'rgb(255,255,255)'
	}
});