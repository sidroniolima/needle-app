import React from 'react';
import { 
  View, 
  StyleSheet } from 'react-native';
import { List,
  ListItem,
  Avatar } from 'react-native-elements';

export default (props) => {
  const lista = [{
    key: '1',
    nome: 'Tailu',
  },{
    key: '2',
    nome: 'Suspiro Íntimo'
  },{
    key: '3',
    nome: 'Sensual Lingerie'
  },{
    key: '4',
    nome: 'D\'Marceles'
  },{
    key: '5',
    nome: 'Fábrica de Bojos'
  },{
    key: '6',
    nome: 'Facção da Fran'
  },
]

return (
    <View style={styles.container}>
      <List>
        {
          lista.map( (item, i) => (
            <ListItem
              key={i}
              title={item.nome}
              avatar={
                <Avatar
                  size="small"
                  rounded
                  title={item.nome}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              }
            />
          ))
        }
      </List>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    padding: 5,
    marginBottom: 20
  }
});