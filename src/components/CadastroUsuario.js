import React from 'react';
import CadastroUsuarioForm from './CadastroUsuarioForm';
import Cadastro from './Cadastro';
import { ImageCadastroUsuario } from './common/Images';

export default (props) => (
  <Cadastro
    image={ImageCadastroUsuario}
    headerText="Faça seu cadastro no Needle App!"
  >
      <CadastroUsuarioForm />
  </Cadastro>
);