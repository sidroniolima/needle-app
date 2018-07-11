import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createUser } from '../actions/AuthAction';

import Input from './common/Input';
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
          style={styles.container}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <Field
              name="nome"
              label="Nome"
              placeholder="Seu nome"
              value={this.props.nome}
              component={Input}
            />

            <Field
              name="empresa"
              label="Empresa"
              placeholder="Nome de sua empresa"
              value={this.props.nomeEmpresa}
              component={Input}
            />

            <Field
              name="porte"
              label="Porte"
              placeholder="Porte de sua empresa"
              value={this.props.porte}
              component={PickerField}
            >
              <Picker.Item value='' label='Selecione' />
              <Picker.Item value='PEQUENO' label='Pequeno' />
              <Picker.Item value='MEDIO' label='Médio' />
              <Picker.Item value='GRANDE' label='Grande' />
            </Field>

            <Field
              name="segmento"
              label="Segmento"
              placeholder="Segmento principal"
              value={this.props.segmento}
              component={PickerField}
            >
              <Picker.Item value='' label='Selecione' />
              <Picker.Item value='LINGERIE' label='Lingerie' />
              <Picker.Item value='FITNESS' label='Fitness' />
              <Picker.Item value='MODA_PRAIA' label='Moda praia' />
              <Picker.Item value='TODOS' label='Todos' />
            </Field>

            <Field
              name="email"
              label="Email"
              placeholder="Email para contato"
              value={this.props.email}
              component={Input}
            />

            <Field
              name="senha"
              label="Senha"
              placeholder="Senha"
              value={this.props.senha}
              component={Input}
            />

            <Field
              name="Confirmação"
              label="Confirmação"
              placeholder="Confirme a senha"
              value={this.props.confirmacao}
              component={Input}
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
  container: {
    flex: 1,
    backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cadastrarBtn: {
    marginTop:5,
    backgroundColor: '#bdc3e7',
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
    color: '#330000',
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