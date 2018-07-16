import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/AuthAction';
import { createFaccao } from '../actions/FaccaoAction';

class Principal extends React.Component {

  render() {
    const { displayName, uid } = this.props.user || {};

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.textBanner}>{`Needle app de ${displayName}.`}</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => this.props.logout()}
          >
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => this.props.createFaccao(uid)}
          >
            <Text style={styles.textButton}>Travete</Text>
            
            <View style={styles.badgeView}>
              <Text style={styles.badge}>3</Text>
            </View>

          </TouchableOpacity>
        </View>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: 'hsl(146, 26%, 50%)',
    alignSelf: 'stretch',
    marginBottom: 10,
    padding: 4,
    paddingLeft: 10
  },
  textButton: {
    color: '#fff',    
    fontSize: 14,
    padding: 4,
    paddingLeft: 15,
    marginLeft: 4
  },
  badgeView:{
    backgroundColor: 'hsl(46, 87%, 26%)',
    borderRadius: 30,
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
    minWidth: 20,
    alignItems: 'center'
  },
  badge:
  {
    color: '#fff',    
    fontSize: 11,
    padding: 2,
  }
});

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps, { logout, createFaccao })(Principal);