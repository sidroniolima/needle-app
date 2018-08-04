import React from 'react';
import { InputText, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Cadastro from '../Cadastro';
import InputSimple from '../common/InputSimple';
import InputItemCount from '../common/InputItemCount';
import styles from './VisualizaFaccao.styles';
import { ImageVisualizaFaccao } from '../common/Images';

class VisualizaFaccao extends React.Component 
{
  render() 
  {
    const { _id, name, size, fone, machines } = this.props.faccaoSelecionada;

    return (
      <Cadastro
        headerText='Detalhes da facção'
        image={ImageVisualizaFaccao}
      >
        <ScrollView style={styles.visualizaFormContainer}>

          <InputText
            name="_id"
            value={_id}
            component={InputText}
            style={{ height: 0 }}
          />

          <InputSimple
            name="name"
            placeholder="Nome da Facção"
            value={name}
            component={InputSimple}
            enabled={false}
          />

          <InputSimple
            name="size"
            placeholder="Nome da Facção"
            value={size}
            component={InputSimple}
            enabled={false}
          />          

          <InputSimple
            name="fone"
            placeholder="Telefone com ddd"
            value={fone}
            component={InputSimple}
          />

          <View style={styles.viewMachines}>
            <InputItemCount
              name="machines.travete"
              label='Travete'
              value={machines.travete}
            />
            <InputItemCount
              name="machines.overlock"
              label='Overlock'
              value={machines.overlock}
            />

            <InputItemCount
              name="machines.reta"
              label='Reta'
              value={machines.reta}
            />

            <InputItemCount
              name="machines.colarete"
              label='Colarete'
              value={machines.colarete}
            />

            <InputItemCount
              name="machines.dois_pontos"
              label='Dois pontos'
              value={machines.dois_pontos}
            />

            <InputItemCount
              name="machines.tres_pontos"
              label='Três pontos'
              value={machines.tres_pontos}
            />

            <InputItemCount
              name="machines.duas_agulhas"
              label='Duas agulhas'
              value={machines.duas_agulhas}
            />

            <InputItemCount
              name="machines.interlock"
              label='Interlock'
              value={machines.interlock}
            />
          </View>
        </ScrollView>
      </Cadastro>
    );
  }
}

const mapStateToProps = state => {
  const { faccaoSelecionada } = state.faccao;

  return { faccaoSelecionada };
}

export default connect(mapStateToProps, null)(VisualizaFaccao);