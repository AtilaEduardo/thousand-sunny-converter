import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../styled/styles";

export function RemoverDados ({data, removerDados}){
    return(
        <Pressable onLongPress={removerDados} style = {styles.dDados}>
            <Text style = {styles.text}> {data.valor} {data.moeda} = R$ {data.convercao}</Text>
        </Pressable>
    );
}