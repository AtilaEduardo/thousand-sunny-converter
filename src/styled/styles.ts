import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  titulo: {
    top: -250,
    width: '90%',
    marginBottom: 1,
    color:'#F9F9F9'
  },

  textTitulo: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
    paddingTop: 5,
    paddingLeft: 5,

  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101215',
    paddingTop: 40,
  },

  areaMoeda: {
    top: -250,
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1,
  },

  textMoeda: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
  },

  areaValor: {
    top: -250,
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingBottom: 9,
    paddingTop: 9,
  },

  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 8,
    color: '#000',
  },

  btnArea: {
    top: -250,
    width: '90%',
    backgroundColor: '#808080',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },

  areaResultado: {
    top: -250,
    width: '90%',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  valorConvertido: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#FFF',
  },

  viewLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  header: {
    paddingTop: 50,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },

  historicoTitulo: {
    top: -550,
    width: '90%',
    marginBottom: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  contextoDados: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
  },
  flatlist: {
    flex: 1,
    paddingTop: 12
  },
  text: {
    color: "#000000",
    fontWeight: 'bold'
  },
  dDados:{
    backgroundColor:"#F9F9F9",
    padding:14,
    width:"100%",
    marginBottom:14,
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});

export { styles };