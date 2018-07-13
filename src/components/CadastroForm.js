import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createUser } from '../actions/AuthAction';

import InputSimple from './common/InputSimple';
import PickerField from './common/PickerField';

class CadastroForm extends Component {

  onSubmit(data) {
    this.props.createUser(data);
    console.log(data);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={{flex:1}}>
        <KeyboardAvoidingView
          style={styles.cadastroFormContainer}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <Field
              name="nome"
              placeholder="Seu nome"
              value={this.props.nome}
              component={InputSimple}
            />

            <Field
              name="empresa"
              placeholder="Nome de sua empresa"
              value={this.props.nomeEmpresa}
              component={InputSimple}
            />

            {/* <Field
              name="porte"
              placeholder="Porte de sua empresa"
              value={this.props.porte}
              style={styles.textInput}
              component={PickerField}
            >
              <Picker.Item value='' label='Selecione' />
              <Picker.Item value='PEQUENO' label='Pequeno' />
              <Picker.Item value='MEDIO' label='Médio' />
              <Picker.Item value='GRANDE' label='Grande' />
            </Field>

            <Field
              name="segmento"
              placeholder="Segmento principal"
              value={this.props.segmento}
              style={styles.textInput}
              component={PickerField}
            >
              <Picker.Item value='' label='Selecione' />
              <Picker.Item value='LINGERIE' label='Lingerie' />
              <Picker.Item value='FITNESS' label='Fitness' />
              <Picker.Item value='MODA_PRAIA' label='Moda praia' />
              <Picker.Item value='TODOS' label='Todos' />
            </Field> */}

            <Field
              name="email"
              placeholder="Email para contato"
              value={this.props.email}
              component={InputSimple}
            />

            <Field
              name="senha"
              placeholder="Senha"
              type="password"
              value={this.props.senha}
              component={InputSimple}
            />

            <Field
              name="confirmacao"
              placeholder="Confirme a senha"
              type="password"
              value={this.props.confirmacao}
              component={InputSimple}
            />
          </ScrollView>

        </KeyboardAvoidingView>

        <View style={styles.errorView}>
          <Text style={styles.errorText}>
            {this.props.msg || ' '}
          </Text>
        </View>
        
        <TouchableOpacity
          style={styles.cadastrarBtn}
          onPress={handleSubmit((values) => this.onSubmit(values))}
        >
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cadastroFormContainer: {
    alignItems: 'stretch',
  },
  textInput:{
    color: '#bfbfbf',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    borderColor: "#bfbfbf",
    borderWidth: 0.6
  },
  cadastrarBtn: {
    marginTop:5,
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14
  },
  errorView:
  {    
    marginTop: 3,
    backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
    alignItems: 'center',
    padding: 2
  },
  errorMsg:
  {
    color: '#e74c3c',
    fontSize: 11
  }
});

CadastroForm = reduxForm({
  form: 'cadastro',
  validate: (values) => {
    const errors = {};

    errors.nome = !values.nome
      ? 'Insira seu nome'
      : undefined;

    errors.empresa = !values.empresa
      ? 'Qual nome da empresa:'
      : undefined;

    errors.porte = !values.porte
      ? 'Se pequeno, médio ou grande'
      : undefined;

    errors.segmento = !values.segmento
      ? 'Lingirie, fitness, moda praia ...'
      : undefined;

    errors.email = !values.email
      ? 'Insira um email válido e ativo'
      : undefined;
    
    errors.senha = !values.senha
      ? 'Definia uma senha'
      : values.senha.length < 6
        ? 'A senha deve ter 6 caracteres'
        : undefined;

    errors.confirmacao = !values.confirmacao
      ? 'Confirme a senha'
      : values.senha != values.confirmacao
        ? 'As senhas não coincidem'
        : undefined;

    return errors;
  }
})(CadastroForm);

const mapStateToProps = state => {
  const { nome,
    empresa,
    porte,
    segmento,
    senha,
    confirmacao } = state.form;

  const msg = state.auth.cadastroError;  
  
  return {
    nome,
    empresa,
    porte,
    segmento,
    senha,
    confirmacao,
    msg
  };
}

export default connect(mapStateToProps, { createUser })(CadastroForm);