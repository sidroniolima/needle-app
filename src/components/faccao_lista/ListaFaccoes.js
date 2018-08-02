import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  List,
  ListItem,
  Avatar
} from 'react-native-elements';
import { Spinner } from '../common/';
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
    const lista = this.props.lista || [];

    if (this.props.consultandoDb)
    {
      return (<Spinner />);
    }
    
    return (
      <Cadastro
        image={Images.ImageCadastroFaccao}
        headerText='Lista de facções perto de você'
      >
        <List>

          {lista.map((item, i) => {
            
            var iniciais = item.name.replace(/da|de|do/, '').split(" ").map((n)=>n[0]).join("");
            //var sumMachines = Object.entries(item.machines).forEach( ([key, value]) => { sum += value; return sum; });

            return (
              <ListItem
                key={item._id}
                title={item.name}
                subtitle={`Máquinas: ${10}`}
                avatar={
                  <Avatar
                    small
                    rounded
                    title={iniciais}                    
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
                }
              />
          )}
        )} 

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

const mapStateToProps = state => {
  const { consultandoDb } = state.db;
  const { lista } = state.faccao;

  return ({ consultandoDb, lista });
} 

export default connect(mapStateToProps, { listarFaccoes })(ListaFaccoes);