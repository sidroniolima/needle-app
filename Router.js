import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Tabs, Actions } from 'react-native-router-flux';
import Login from './src/components/Login';
import SplashScreen from './src/components/SplashScreen';
import Cadastro from './src/components/Cadastro';
import Principal from './src/components/Principal';
import CustomNavigationBar from './src/components/CustomNavigationBar';
import TabIcon from './src/components/common/TabIcon';

const RouterComponent = () => {
	return (
		<View style={{ flex: 1 }}>
			<Router>

				<Scene
					key="root"
					hideNavBar>

					<Scene
						key='splashScreen'
						hideNavBar
						component={SplashScreen}
						initial />

					<Scene
						key="auth"
						headerMode='none'>

						<Scene
							key="login"
							component={Login} />

						<Scene
							key='cadastro'
							component={Cadastro} />
					</Scene>

					<Tabs
						key="tabbar"
						tabs
						tabBarStyle={{ backgroundColor: '#FFFFFF'}}
						tabBarPosition={'bottom'}
						showLabel={false}
					>
						<Scene 
							key="One" 
							icon={TabIcon} 
							iconName="plus"
							title="Incluir">
							
							<Scene
								key="screenone"
								component={Principal}
								hideNavBar
								initial
							/>
						</Scene>
						
						<Scene 
							key="Two" 
							icon={TabIcon} 
							iconName="list"
							title="Oportunidades">
							
							<Scene
								key="screentwo"
								component={Cadastro}
								hideNavBar
							/>
						</Scene>
					
						<Scene 
							key="Three" 
							icon={TabIcon} 
							iconName="archive"
							title="Sua lista">

							<Scene
								key="screenthree"
								component={Cadastro}
								hideNavBar
							/>
						</Scene>

					</Tabs>

					<Scene
						key="principal"
						component={Principal}
						title="Needle" />

				</Scene>
			</Router>
		</View >
	);
};

export default RouterComponent;