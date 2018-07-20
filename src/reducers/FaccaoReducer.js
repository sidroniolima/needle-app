import { NOVA_FACCAO, ADICIONA_MACHINE, ZERA_MACHINE } from '../actions/types';
import propTypes from 'redux-form/lib/propTypes';

const INITIAL_STATE = {
  user: '',
  name: '',
  size: '',
  fone: '',
  location: [0.00, 0.00],
  machines:
  {
    overlock: 0,
    travete: 0,
    reta: 0,
    colarete: 0,
    dois_pontos: 0,
    tres_pontos: 0,
    duas_agulhas: 0,
    interlock: 0
  }
  
};

export default (state = INITIAL_STATE, action) =>
{
  switch(action.type)
  {
    case NOVA_FACCAO : 
      return INITIAL_STATE;

    case ADICIONA_MACHINE : 
    {     
      const oldState = { ...state };
      oldState.machines[action.payload]++;

      return { ...state, machines : oldState.machines };
    }

    case ZERA_MACHINE :      
    {
      const oldState = { ...state };
      oldState.machines[action.payload] = 0;

      return { ...state, machines : oldState.machines };
    }  
    default :
      return state;
  }
}