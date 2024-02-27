import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Api from '../../api/api';
import Seletor from '../seletor/seletor';
import { styles } from '../../styled/styles';
import localStorage from '../../banco/localStorage';

interface Moeda {
  key: string;
  label: string;
  value: string;
}

export function Tela() {
  const [moeda, setMoeda] = useState<Moeda[]>([]);
  const [carregamento, setCarregamento] = useState<boolean>(true);
  const [moedaEscolhida, setMoedaEscolhida] = useState<string | null>(null);
  const [moeda2Valor, setMoeda2Valor] = useState<number>(0);
  const [valorMoeda, setValorMoeda] = useState<string>('');
  const [valorConvertido, setValorConvertido] = useState<number>(0);
  const { salvarStorage } = localStorage();

  useEffect(() => {
    async function carregarMoedas() {
      const resposta = await Api.get('all');
      let vetorMoedas: Moeda[] = [];
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
  }, []);

  async function converterMoeda() {
    if (moedaEscolhida === null || valorMoeda === '') {
      Alert.alert('Campo(s) Obrigatório(s) não Preenchido(s), Informe os Dados Novamente.');
      return;
    }

    const resposta = await Api.get(`all/${moedaEscolhida}-BRL`);
    const resultado = resposta.data[moedaEscolhida].ask * parseFloat(valorMoeda);

    setValorConvertido(parseFloat(resultado.toFixed(2)));
    await salvarStorage("@pass", valorMoeda, moedaEscolhida, resultado.toFixed(2));
    setMoeda2Valor(parseFloat(valorMoeda));
    Keyboard.dismiss();
  }

  if (carregamento) {
    return (
      <View style={styles.viewLoading}>
        <ActivityIndicator color={'black'} size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/Sed-38-512.png')} />
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
          <Text style={styles.textMoeda}>Digite um Valor que Deseja Converter</Text>
          <TextInput
            placeholder="EX:. 150"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(valor) => setValorMoeda(valor)}
          />
        </View>

        <TouchableOpacity style={styles.btnArea} onPress={converterMoeda}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>{valorMoeda} {moedaEscolhida}</Text>
            <Text style={[styles.valorConvertido, { fontSize: 18, margin: 10 }]}>Corresponde à</Text>
            <Text style={styles.valorConvertido}>R$ {valorConvertido}</Text>
          </View>
        )}
      </View>
    );
  }
}