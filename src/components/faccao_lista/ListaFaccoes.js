import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet
} from 'react-native';
import {
  List,
  ListItem,
  Avatar
} from 'react-native-elements';
import { listarFaccoes } from '../../actions/FaccaoAction';

import Cadastro from '../Cadastro';
import Images from '../common/Images';

class ListaFaccoes extends React.Component 
{

  componentDidMount()
  {
    this.props.listarFaccoes();
  }

  render() 
  {
    return (
      <Cadastro
        image={Images.ImageCadastroFaccao}
        headerText='Lista de facções perto de você'
      >
        <List>
{/*           {
            lista.map((item, i) => (
              <ListItem
                key={i}
                title={item.nome}
                avatar={
                  <Avatar
                    small
                    rounded
                    title={item.getIniciais()}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
                }
              />
            ))
          } */}
        </List>
      </Cadastro>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 5
  }
});



export default connect(null, { listarFaccoes })(ListaFaccoes);