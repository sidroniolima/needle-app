import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cadastroFormContainer: {
    flex: 1
  },
  cadastrarBtn: {
    marginTop: 5,
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
  },
  txtBtn:
  {
    fontWeight: "400",
    color: '#fff'
  },
  errorView:
  {    
    marginTop: 3,
    backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
    alignItems: 'center',
    padding: 2,
  },
  errorText:
  {
    color: '#e74c3c',
    fontSize: 11,
  },
  viewMachines:
  {
    flex: 1, 
    flexWrap: 'wrap',
    height: 160
  }
});

export default styles;