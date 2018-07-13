import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/AuthAction';

class Principal extends React.Component {

  render() {
    const { email } = this.props.user || {};

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.textBanner}>Needle app</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => this.props.logout()}
          >
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 3,
    justifyContent: 'flex-end'
  },
  textBanner:
    {
      color: '#e74c3c',
      fontSize: 12
    },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginBottom: 10
  }
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps, { logout })(Principal);