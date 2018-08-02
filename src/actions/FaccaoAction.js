import firebase from 'firebase';
import { 
  NOVA_FACCAO, 
  ADICIONA_MACHINE, 
  ZERA_MACHINE,
  PESQUISA_FACCAO_OK,
  PESQUISA_FACCAO_NAO_ENCONTRADA,
  CONSULTANDO_DB,
  FACCOES_LISTADAS } from './types';

import snapshotToArray from './snapshotToArray';

export const createFaccao = (uid, data) => 
{
  data = JSON.stringify(data);
  
  return (dispatch) => 
  {    
    var newFaccaoKey = data["_id"];
    var updates = {};
    
    data["user"] = uid;

    if (data["_id"] === null || data["_id"] === undefined)
    {
      newFaccaoKey = firebase
        .database()
        .ref()
        .child('faccoes')
        .push().key;

      data["_id"] = newFaccaoKey;      
    }
    
    updates['/faccoes/' + newFaccaoKey] = data;
    updates['/user-faccao/' + uid + '/'] = data;

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
    dispatch({ type: CONSULTANDO_DB, payload: true });

    firebase
      .database()
      .ref(`user-faccao/${uid}/`)
      .once('value', 
        (snap) => {
          
          if (snap.val() !== null)
          {
            dispatch({ type: PESQUISA_FACCAO_OK, payload: snap.val() });
          } 
          else
          { 
            dispatch({ type: PESQUISA_FACCAO_NAO_ENCONTRADA, payload: true });
          }

          dispatch({ type: CONSULTANDO_DB, payload: false });
        }, 
        (error) => 
        {
          console.log('ERROR PESQUISA', error);
        }
      );    
  }
}

export const listarFaccoes = () =>
{
  return (dispatch) =>
  {
    dispatch({ type: CONSULTANDO_DB, payload: true });

    firebase
      .database()
      .ref(`faccoes`)
      .once('value', 
        (snap) => 
        {
          dispatch({ type: FACCOES_LISTADAS, payload: snapshotToArray(snap) });

          dispatch({ type: CONSULTANDO_DB, payload: false });
        }, 
        (error) => console.log('ERROR PESQUISA', error)
      );

    //dispatch({ type: CONSULTANDO_DB, payload: false });
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