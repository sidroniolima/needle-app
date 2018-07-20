import firebase from 'firebase';
import { NOVA_FACCAO, ADICIONA_MACHINE, ZERA_MACHINE } from './types';

export const createFaccao = (uid) => 
{
  return (dispatch) => 
  {
    var faccaoData = {
      user: uid,
      name: 'Tailu',
      machines: ['Overlock','Colarete','3 pontos']
    };

    // Get a key for a new Post.
    var newFaccaoKey = firebase
      .database()
      .ref()
      .child('faccoes')
      .push().key;

    var updates = {};
    
    updates['/faccoes/' + newFaccaoKey] = faccaoData;
    updates['/user-faccao/' + uid + '/' + newFaccaoKey] = faccaoData;

    firebase
      .database()
      .ref()
      .update(updates)
      .then( () => console.log('Gravou'))
      .catch( (error) => console.log('Error: ', error));
  }
}

export const novaFaccao = () => 
{
  return (dispatch) =>
  {
    dispatch({ type: NOVA_FACCAO, payload: NOVA_FACCAO })
  }
}

export const adicionaMachine = (machine) =>
{
  return (dispatch) =>
  {
    dispatch({ type: ADICIONA_MACHINE, payload: machine });
  }
}

export const zeraMachine = (machine) =>
{
  return (dispatch) =>
  {
    dispatch({ type: ZERA_MACHINE, payload: machine });
  }
}