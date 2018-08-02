import React from 'react';
import { connect } from 'react-redux';
import Cadastro from '../Cadastro';
import CadastroFaccaoForm from './CadastroFaccaoForm';
import Images from '../common/Images';
import Spinner from '../common/Spinner';

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
      return <Spinner/>;
    }

    var headerText = `Olá, ${this.props.displayName}! Complete seu cadastro!`  
    
    return (
      <Cadastro
        image={Images.ImageCadastroFaccao}
        headerText={headerText}
      >
        <CadastroFaccaoForm />
      </Cadastro>
    );
  }
}

const mapStateToProps = state => 
{ 
  var { displayName, uid } = state.auth.user;
  var { consultandoDb } = state.db;
  return { displayName, uid, consultandoDb };
}

export default connect(mapStateToProps, { pesquisarFaccao })(CadastroFaccao);