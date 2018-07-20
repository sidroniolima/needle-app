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

import { createFaccao, novaFaccao, 
  adicionaMachine, zeraMachine } from '../../actions/FaccaoAction';

import InputSimple from '../common/InputSimple';
import PickerSimple from '../common/PickerSimple';
import InputItemCount from '../common/InputItemCount';

class CadastroFaccaoForm extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      pickerPorteValue: 'PEQUENO'
    }
  }

  componentDidMount()
  {
    this.props.novaFaccao();
  }

  onSubmit(data) {
    //this.props.createUser(data);
    console.log(data);
  }

  handleItemCountClick(field)
  {
    console.log('click', field);
    this.props.adicionaMachine(field);
  }
  
  handleItemCountLongClick(field)
  {
    console.log('long', field);
    this.props.zeraMachine(field);
  }

  render() 
  {
    const { handleSubmit } = this.props;
    const { user, name, size, fone, location, machines } = this.props.faccao;
    console.log(machines.travete)
    return (
      <ScrollView style={{flex:1}}>
        <KeyboardAvoidingView
          style={styles.cadastroFormContainer}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <Field
              name="name"
              placeholder="Nome da Facção"
              value={name}
              component={InputSimple}
            />          

            <Field
              name="size"
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
              name="fone"
              placeholder="Telefone com ddd"
              value={fone}
              component={InputSimple}
            />

            <View style={styles.viewMachines}>
              <Field
                name="machines.travete"
                label='Travete'
                value={machines.travete}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('travete')}
                onLongPress={() => this.handleItemCountLongClick('travete')}
              />
              <Field
                name="machines.overlock"
                label='Overlock'
                value={machines.overlock}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('overlock')}
                onLongPress={() => this.handleItemCountLongClick('overlock')}
              />

              <Field
                name="machines.reta"
                label='Reta'
                value={machines.reta}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('reta')}
                onLongPress={() => this.handleItemCountLongClick('reta')}
              />

              <Field
                name="machines.colarete"
                label='Colarete'
                value={machines.colarete}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('colarete')}
                onLongPress={() => this.handleItemCountLongClick('colarete')}
              />           

              <Field
                name="machines.dois_pontos"
                label='Dois pontos'
                value={machines.dois_pontos}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('dois_pontos')}
                onLongPress={() => this.handleItemCountLongClick('dois_pontos')}
              />    

              <Field
                name="machines.tres_pontos"
                label='Três pontos'
                value={machines.tres_pontos}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('tres_pontos')}
                onLongPress={() => this.handleItemCountLongClick('tres_pontos')}
              />    

              <Field
                name="machines.duas_agulhas"
                label='Duas agulhas'
                value={machines.duas_agulhas}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('duas_agulhas')}
                onLongPress={() => this.handleItemCountLongClick('duas_agulhas')}
              />         

              <Field
                name="machines.interlock"
                label='Interlock'
                value={machines.interlock}
                component={InputItemCount}
                onPress={() => this.handleItemCountClick('interlock')}
                onLongPress={() => this.handleItemCountLongClick('interlock')}
              />       
            </View>                                                             
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
  },
  viewMachines:
  {
    justifyContent: 'space-between'
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
  const faccao = state.faccao;
  const initialValues = faccao;
  const msg = state.auth.cadastroError;  
  
  return { faccao, initialValues, msg  };
}

export default connect(mapStateToProps, 
  { novaFaccao, 
    createFaccao, 
    adicionaMachine, 
    zeraMachine })(CadastroFaccaoForm);