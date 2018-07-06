import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Text } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from './common/Input';

class CadastroForm extends Component
{
  render()
  {
    const { handleSubmit } = this.props;

    return (
      <View
        style={styles.container}
      >
        <Text>
          Inclua suas informações
        </Text>

        <Field
          name="nome"
          placeholder="Seu nome"
          value={this.props.nome}
          component={Input}
        />

  {/*    Nome
        Empresa
        Segmento
        Porte
        Email
        Senha
        Senha
        Localização */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'flex-start',
    marginTop: 20
  }
})

CadastroForm = reduxForm({
  form: 'cadastro'
})(CadastroForm);

const mapStateToProps = state => {
  const { nome } = state.form;

  return { nome };
}

export default connect(mapStateToProps, null)(CadastroForm);