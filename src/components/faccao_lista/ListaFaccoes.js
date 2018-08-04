import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';
import {
  List,
  ListItem,
  Avatar,
  Rating
} from 'react-native-elements';
import { Spinner } from '../common/';
import { listarFaccoes } from '../../actions/FaccaoAction';

import Cadastro from '../Cadastro';
import Images from '../common/Images';

import sumMachines from '../../util/machineSum';

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
            var subtitle = `Máquinas: ${sumMachines(item.machines)}`;

            return (
              <ListItem
                key={item._id}
                title={item.name}
                subtitle={        
                  <View style={styles.subtitleView}>
                    <Text style={styles.ratingText}>{subtitle}</Text>
                    <Rating
                      onFinishRating={this.ratingCompleted}
                      style={styles.rating}
                      imageSize={20}
                      type="heart"
                    />
                </View>
                }
                avatar={
                  <Avatar
                    small
                    rounded
                    title={iniciais}                    
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
                }
                onPress={ () => Actions.visualizaFaccao() }
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
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  rating: {
    paddingLeft: 10,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  ratingText: {    
    color: 'grey',
    minWidth: 35,
    marginRight: 10
  }
});

const mapStateToProps = state => {
  const { consultandoDb } = state.db;
  const { lista } = state.faccao;

  return ({ consultandoDb, lista });
} 

export default connect(mapStateToProps, { listarFaccoes })(ListaFaccoes);