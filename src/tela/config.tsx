import { ActivityIndicator, Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Cores from './../configuracao/config';
import Api from './../api/api';
import Seletor from './../components/index';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { styles } from './../styled/styles';
  
export default function Tela() {

  const [moeda, setMoeda] = useState([]);
  const [carregamento, setCarregamento] = useState(true);
  const [moedaEscolhida, setMoedaEscolhida] = useState(null);
  const [moeda2Valor, setMoeda2Valor] = useState(0);
  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function carregarMoedas() {
      const resposta = await Api.get('all');

      let vetorMoedas: any = [];

      Object.keys(resposta.data).map(key => {
        vetorMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });

      setMoeda(vetorMoedas);
      setCarregamento(false);

    }
    carregarMoedas();
  });

  async function converterMoeda() {
    if (moedaEscolhida === null || valorMoeda === 0) {
      Alert.alert(
        'Campo(s) Obrigatorio(s) não Preenchido(s), Informe os Dados Novamente.',
      );
      return;
    }

    const resposta = await Api.get(`all/${moedaEscolhida}-BRL`);

    let resultado: any = resposta.data[moedaEscolhida].ask * parseFloat(moeda2Valor);

    setValorConvertido(resultado.toFixed(2));
    setMoeda2Valor(valorMoeda);
    Keyboard.dismiss();
  }

  if (carregamento) {
    return (
      <View style={styles.viewLoading}>
        <ActivityIndicator color={Cores.black} size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Sed-38-512.webp')}/>
        <View style={styles.titulo}>
          <Text style={styles.textTitulo}>THOUSAND SUNNY CONVERTER</Text>
        </View>
        <View style={styles.areaMoeda}>
          <Text style={styles.textMoeda}>Selecione uma Moeda Base</Text>
          <Seletor
            moeda={moeda}
            onChange={(moeda) => setMoedaEscolhida(moeda)}
          />
        </View>

        <View style={styles.areaValor}>
          <Text style={styles.textMoeda}>
            Digite um Valor que Deseja Converter
          </Text>
          <TextInput
            placeholder="EX:. 150"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(valor: any) => {
              setValorMoeda(valor);
            }}
          />
        </View>

        <TouchableOpacity style={styles.btnArea} onPress={converterMoeda}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>
              {valorMoeda} {moedaEscolhida}
            </Text>
            <Text style={[styles.valorConvertido, { fontSize: 18, margin: 10 }]}>
              Coresponde a
            </Text>
            <Text style={styles.valorConvertido}>R$ {valorConvertido}</Text>
          </View>
        )}
      </View>
    );
  }
}