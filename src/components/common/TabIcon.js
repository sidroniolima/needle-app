import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class TabIcon extends React.Component {

  render() 
  {
    console.log(this.props.focused);
    const styleDinamyc = this.props.focused
      ? styles.selected
      : styles.normal;

    return (
      <View style={styles.container}>

        <FontAwesome
          style={styleDinamyc.icon}
          name={this.props.iconName}
          size={24}
        />

        <Text 
          style={styleDinamyc.textIcon}>
          {this.props.title}
        </Text>

      </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center'
  },
  selected: {
    icon: {
      color: '#e74c3c'
    },
    textIcon: {
      fontSize: 11,
      color: '#e74c3c'
    }
  },
  normal: {
    icon: {
      color: '#b3b3b3'
    },
    textIcon: {
      fontSize: 11,
      color: '#b3b3b3'
    }
  }
}

const mapStateToProps = state => ({ scene : state.sceneReducer});

export default TabIcon;