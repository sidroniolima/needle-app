import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default (props) => 
{
  console.log('props', props);
  
  return (
    <View style={styles.content}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  textBanner:
  {
    color: '#e74c3c',
    fontSize: 12
  },
  btn: {
    backgroundColor: 'hsl(146, 26%, 50%)',
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
