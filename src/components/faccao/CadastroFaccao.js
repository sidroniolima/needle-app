import React from 'react';
import { connect } from 'react-redux';
import Cadastro from '../Cadastro';
import CadastroFaccaoForm from './CadastroFaccaoForm';
import { Spinner } from '../common/';
import { ImageCadastroFaccao } from '../common/Images';
import { pesquisarFaccao } from '../../actions/FaccaoAction';

class CadastroFaccao extends React.Component 
{
  componentDidMount()
  {
    this.props.pesquisarFaccao(this.props.uid);
  }

  render() 
  {
    if (this.props.consultandoDb)
    {
      return (<Spinner />);
    }

    var acaoMsg = this.props.faccao && this.props.faccao.name ? 'Atualize' : 'Complete';
    var lblBtnSubmit = acaoMsg === 'Atualize' ? 'Atualizar' : 'Completar';
    var headerText = `Olá, ${this.props.displayName}! ${acaoMsg} seu cadastro!`  
    
    return (
      <Cadastro
        image={ImageCadastroFaccao}
        headerText={headerText}
      >
        <CadastroFaccaoForm 
          lblBtnSubmit = {lblBtnSubmit}
        />
      </Cadastro>
    );
  }
}

const mapStateToProps = state => 
{ 
  var { displayName, uid } = state.auth.user;
  var { consultandoDb } = state.db;
  var { faccao } = state.faccao;

  return { displayName, uid, consultandoDb, faccao };
}

export default connect(mapStateToProps, { pesquisarFaccao })(CadastroFaccao);