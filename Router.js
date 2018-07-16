import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Tabs, Actions, ActionConst } from 'react-native-router-flux';
import TabIcon from './src/components/common/TabIcon';
import Login from './src/components/Login';
import SplashScreen from './src/components/SplashScreen';
import CadastroUsuario from './src/components/CadastroUsuario';
import Principal from './src/components/Principal';
import CadastroFaccao from './src/components/faccao/CadastroFaccao';

const RouterComponent = () => {
	return (
		<Router>

			<Scene
				key="root"
				hideNavBar>

				<Scene
					key='splashScreen'
					hideNavBar
					component={SplashScreen} />

				<Scene
					key="auth"
					headerMode='none'>

					<Scene
						key="login"
						component={Login} />

					<Scene
						key='cadastro'
						component={CadastroUsuario} />
				</Scene>

				<Tabs
					key="tabbar"
					tabs
					tabBarStyle={{ backgroundColor: '#FFFFFF' }}
					tabBarPosition={'bottom'}
					showLabel={false}
					type={ActionConst.REPLACE}
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
							component={CadastroFaccao}
							hideNavBar
						/>
					</Scene>

					<Scene
						key="Three"
						icon={TabIcon}
						iconName="industry"
						title="Sua facção">

						<Scene
							key="screenthree"
							component={CadastroFaccao}
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
	);
};

export default RouterComponent;