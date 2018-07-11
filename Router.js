import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './src/components/Login';
import SplashScreen from './src/components/SplashScreen';
import Cadastro from './src/components/Cadastro';
import Principal from './src/components/Principal';

const RouterComponent = () => {
	return (
		<View style={ {flex:1} }>
		<Router
			navigationBarStyle={styles.navBar} 
			titleStyle={styles.navBarTitle} 
			barButtonTextStyle={styles.barButtonTextStyle} 
			barButtonIconStyle={styles.barButtonIconStyle}>			
			
			<Scene key="root" hideNavBar >
				
 				<Scene key='splashScreen' hideNavBar component={SplashScreen}/>
				
				<Scene key="auth" headerMode='none'>
					<Scene key="login" component={ Login } />				
					
				</Scene>
				
				<Scene key='cadastro' component={Cadastro}/>
				
				<Scene key="principal" component={Principal} title="Needle"/>

			</Scene>
		</Router>
		</View>
	);
};

const styles = StyleSheet.create({
	navBar: 
	{
		backgroundColor: 'hsl(330, 100%, 15%)'
	},
	navBarTitle:{
			color:'#FFFFFF'
	},
	barButtonTextStyle:{
			color:'#FFFFFF'
	},
	barButtonIconStyle:{
			tintColor:'rgb(255,255,255)'
	}
});

export default RouterComponent;