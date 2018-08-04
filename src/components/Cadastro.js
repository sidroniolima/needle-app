import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default (props) => (
  <View style={styles.cadastro}>
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={props.image}
      />
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>

    <View style={{ flex: 5 }}>
      {props.children}
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
    backgroundColor: '#f8f8f8',
    padding: 5,
    marginTop: 20
  },
  logo:{
    width: 32,
    height: 32,
    marginBottom: 10
  }
});