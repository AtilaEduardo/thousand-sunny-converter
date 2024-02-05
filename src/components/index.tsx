import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Cores from '../configuracao/config';


const Seletor = (props: any) => {
    const placeHolder = {
        label: 'Selecione sua Moeda',
        value: null,
        color: Cores.black,
    };

    return (
        <RNPickerSelect
            placeholder={placeHolder}
            items={props.moeda}
            onValueChange={valor => props.onChange(valor)}
            style={
                {
                    inputAndroid: {
                        fontSize: 20,
                        color: Cores.black,
                    }
                }} />
    );
}

export default Seletor;