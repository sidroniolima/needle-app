import React from 'react';
import { connect } from 'react-redux';
import Cadastro from '../Cadastro';
import CadastroFaccaoForm from './CadastroFaccaoForm';
import Images from '../common/Images';

class CadastroFaccao extends React.Component 
{
  render() 
  {
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
  var { displayName } = state.auth.user;
  return { displayName };
}

export default connect(mapStateToProps, null)(CadastroFaccao);