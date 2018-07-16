import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createFaccao } from '../../actions/FaccaoAction';

import InputSimple from '../common/InputSimple';
import PickerSimple from '../common/PickerSimple';

class CadastroFaccaoForm extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      pickerPorteValue: 'PEQUENO'
    }
  }

  onSubmit(data) {
    this.props.createUser(data);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ScrollView style={{flex:1}}>
        <KeyboardAvoidingView
          style={styles.cadastroFormContainer}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <Field
              name="empresaNome"
              placeholder="Nome da Facção"
              value={this.props.nomeEmpresa}
              component={InputSimple}
            />          

            <Field
              name="porte"
              value={this.state.pickerPorteValue}
              component={PickerSimple}
              onChange={ (itemValue, item) => {								
								this.setState({pickerPorteValue: itemValue});								
							}}
              options={[{value: 'PEQUENO', label: 'Pequeno'},
                        {value: 'MEDIO', label: 'Médio'},
                        {value: 'GRANDE', label: 'Grande'}]}
            />

            <Field
              name="telefone"
              placeholder="Telefone com ddd"
              value={this.props.telefone}
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
          <Text>Completar</Text>
        </TouchableOpacity>
      </ScrollView>
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

CadastroFaccaoForm = reduxForm({
  form: 'faccao',
  validate: (values) => {
    const errors = {};

    errors.nome = !values.empresaNome
      ? 'Insira o nome da empresa'
      : undefined;

    errors.telefone = !values.telefone
      ? 'Insira um telefone com ddd'
      : undefined;
  

    return errors;
  }
})(CadastroFaccaoForm);

const mapStateToProps = state => {
  const { 
    empresaNome,
    segmento,
    porte,
    maquinas,
    telefone,
    localizacao
  } = state.form;

  const msg = state.auth.cadastroError;  
  
  return {
    empresaNome,
    segmento,
    porte,
    maquinas,
    telefone,
    localizacao
  };
}

export default connect(mapStateToProps, { createFaccao })(CadastroFaccaoForm);