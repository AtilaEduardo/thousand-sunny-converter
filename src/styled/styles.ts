import Cores from "../configuracao/config";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    titulo: {
      top: -250,
      width: '90%',
      marginBottom: 1,
    },
    textTitulo: {
      textAlign: 'center',
      fontSize: 15,
      color: Cores.white,
      paddingTop: 5,
      paddingLeft: 5,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Cores.grey,
      paddingTop: 40,
    },
    areaMoeda: {
      top: -250,
      width: '90%',
      backgroundColor: Cores.greyLight,
      paddingTop: 9,
      borderTopLeftRadius: 9,
      borderTopRightRadius: 9,
      marginBottom: 1,
    },
    textMoeda: {
      fontSize: 15,
      color: Cores.black,
      paddingTop: 5,
      paddingLeft: 5,
    },
    areaValor: {
      top: -250,
      width: '90%',
      backgroundColor: Cores.greyLight,
      paddingBottom: 9,
      paddingTop: 9,
    },
    input: {
      width: '100%',
      padding: 10,
      height: 45,
      fontSize: 20,
      marginTop: 8,
      color: Cores.black,
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
      color: Cores.white,
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
      color: Cores.white,
    },
    viewLoading: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  });

  export {styles};