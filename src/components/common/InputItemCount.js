import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default (props) => 
{
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <Text style={styles.textButton}>{props.label}</Text>

      <View style={styles.badgeView}>
        <Text style={styles.badge}>{props.input.value || '0'}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textBanner:
    {
      color: '#e74c3c',
      fontSize: 12
    },
  btn: {
    backgroundColor: '#F5DEB3',
    marginBottom: 10,
    padding: 8,
    alignSelf: 'stretch',
    marginRight: 8
  },
  textButton: {
    color: 'hsl(46, 87%, 26%)',
    fontSize: 14,
    fontWeight: "600",
    padding: 4,
    paddingLeft: 15,
    marginLeft: 4
  },
  badgeView: {
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
