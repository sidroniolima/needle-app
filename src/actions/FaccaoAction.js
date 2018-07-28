import firebase from 'firebase';
import { NOVA_FACCAO, ADICIONA_MACHINE, ZERA_MACHINE } from './types';

export const createFaccao = (uid, data) => 
{
  return (dispatch) => 
  {    
    var newFaccaoKey = firebase
      .database()
      .ref()
      .child('faccoes')
      .push().key;

    var updates = {};
    
    updates['/faccoes/' + newFaccaoKey] = data;
    updates['/user-faccao/' + uid + '/' + newFaccaoKey] = data;

    firebase
      .database()
      .ref()
      .update(updates)
      .then( () => console.log('Gravou'))
      .catch( (error) => console.log('Error: ', error));
  }
}

export const pesquisarFaccao = (uid) =>
{
  
  return (dispatch) =>
  {
    firebase
      .database()
      .ref(`user-faccao/${uid}`)
      .on('value', 
        (snapshot) => {
          console.log('DADOS', snapshot.val());
        }, 
        (error) => console.log('ERROR PESQUISA', error)
      );
  }
}

export const listarFaccoes = () =>
{
  
  return (dispatch) =>
  {
    firebase
      .database()
      .ref(`faccoes`)
      .on('value', 
        (snapshot) => {
          console.log('DADOS', snapshot.val());
        }, 
        (error) => console.log('ERROR PESQUISA', error)
      );
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