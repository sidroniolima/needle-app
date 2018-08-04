import { NOVA_FACCAO, 
  ADICIONA_MACHINE, 
  ZERA_MACHINE,
  PESQUISA_FACCAO_OK,
  PESQUISA_FACCAO_NAO_ENCONTRADA,
  FACCOES_LISTADAS } from '../actions/types';

const INITIAL_STATE = {
  faccao:
  {
    name: '',
    size: '',
    fone: '',
    initials: '',
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
  },
  faccaoNaoEncontrada: false,
  faccaoSelecionada:   {
    name: '',
    size: '',
    fone: '',
    initials: '',
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
  },
  lista: []
};

export default (state = INITIAL_STATE, action) =>
{
  switch(action.type)
  {
    case NOVA_FACCAO : 
      return INITIAL_STATE.faccao;

    case ADICIONA_MACHINE : 
    {     
      const faccaoEditada = { ...state.faccao };
      faccaoEditada.machines[action.payload]++;

      return { ...state, faccao: { ...state.faccao, machines : faccaoEditada.machines } };
    }

    case ZERA_MACHINE :      
    {
      const faccaoEditada = { ...state.faccao };
      faccaoEditada.machines[action.payload] = 0;

      return { ...state, faccao: { ...state.faccao, machines : faccaoEditada.machines } };
    }  
    
    case PESQUISA_FACCAO_OK:
    {
      return { ...state, faccao: action.payload, faccaoNaoEncontrada: false };
    }
    
    case PESQUISA_FACCAO_NAO_ENCONTRADA:
    {
      return { ...state, faccao: INITIAL_STATE.faccao, faccaoNaoEncontrada: action.payload };
    }

    case FACCOES_LISTADAS:
    {
      return { ...state, lista: action.payload };
    }
    
    default :
      return state;
  }
}