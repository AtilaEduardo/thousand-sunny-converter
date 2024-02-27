import { View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styled/styles";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import localStorage from "../../banco/localStorage";
import { RemoverDados } from "../../banco/removerDados";

export function ConversaoSalva() {

    const [listarDados, salvarDados] = useState([]);
    const focus = useIsFocused();
    const { buscarStorage, removerStorage } = localStorage();

    useEffect(() => {
        async function carregarDados() {
            const dados = await buscarStorage("@pass");
            salvarDados(dados)
        }
        carregarDados();
    }, [focus])

    async function removerDadosOnClick(item: any) {
        const dados = await removerStorage("@pass", item);
        salvarDados(dados);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/Sed-38-512.png')} />
            <View style={styles.header}>
            </View>

            <View style={styles.contextoDados}>
                <Text style={styles.historicoTitulo}>Histórico de Conversões</Text>
                <FlatList
                    style={{ marginTop: -500 }}
                    data={listarDados}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => <RemoverDados data={item} removerDados={() => removerDadosOnClick(item)} />}
                />
            </View>

        </SafeAreaView>
    )
}