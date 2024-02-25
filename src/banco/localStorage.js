import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const localStorage = () => {

    const buscarStorage = async (key) => {
        try {
            const dados = await AsyncStorage.getItem(key);
            return JSON.parse(dados) || [];
        } catch (error) {
            Alert.alert('Erro ao buscar dados!', error);
            return [];
        }
    }

    const salvarStorage = async (key, valor, moeda, convercao) => {
        try {
            let dados = await AsyncStorage.getItem(key);
            dados = dados ? JSON.parse(dados) : [];
            const id = new Date().getTime(); 
            dados.push({ id, valor, moeda, convercao }); 
            await AsyncStorage.setItem(key, JSON.stringify(dados));
        } catch (error) {
            Alert.alert('Erro ao salvar dados!', error);
            return [];
        }
    }

    const removerStorage = async (key, item) => {
        try {
            let dados = await AsyncStorage.getItem(key);
            dados = dados ? JSON.parse(dados) : [];
            const meusDados = dados.filter((dadosItem) => dadosItem.id !== item.id);
            await AsyncStorage.setItem(key, JSON.stringify(meusDados));
            return meusDados;
        } catch (error) {
            Alert.alert('Erro ao deletar dados!', error);
            return [];
        }
    }

    return {
        buscarStorage,
        salvarStorage,
        removerStorage,
    }

}

export default localStorage;
