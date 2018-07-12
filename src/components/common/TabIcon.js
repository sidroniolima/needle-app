import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class TabIcon extends React.Component {
  
  render() 
  {
    console.log(this.props)
    return (
      <View style={styles.container}>
        
        <FontAwesome 
          style={styles.icon}
          name={this.props.iconName}
          size={24} 
        />
        
        <Text style={styles.textIcon}>
          {this.props.title}
        </Text>
        
      </View>
    );
  }
}

const styles = {
  icon:{
    color: '#b3b3b3'
  },
  container: {
    alignItems: 'center'
  },
  textIcon: {
    fontSize: 11,
    color: '#b3b3b3'
  }
}

export default TabIcon;