import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CadastroForm from './CadastroForm';
import BackImage from './BackImage';

export default (props) => (
  <View style={styles.cadastro}>
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/spool-of-thread.png')}
      />
      <Text style={styles.headerText}>Faça seu cadastro no Needle App!</Text>
    </View>

    <View style={{ flex: 3 }}>
      <CadastroForm />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText:
  {
    color: '#e74c3c'
  },
  cadastro: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    padding: 10
  },
  logo:{
    width: 32,
    height: 32,
  }
});