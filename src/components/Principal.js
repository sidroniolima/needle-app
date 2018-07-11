import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/AuthAction';
  
class Principal extends React.Component
{
 
  render()
  {
    const { email } = this.props.user || {};

    return (
      <View style={styles.container}>
        <Text>{`Bem vindo, ${email}, ao Needle app`}</Text>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => this.props.logout()}
        >
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutBtn:{
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 10
  }
}

const mapStateToProps = state => ({ user : state.auth.user });

export default connect(mapStateToProps, {logout})(Principal);