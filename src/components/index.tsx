import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Seletor = (props: any) => {
    const placeHolder = {
        label: 'Selecione sua Moeda',
        value: null,
        color: 'black',
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
                        color: 'black',
                    },

                    inputIOS:{
                        fontSize: 20,
                        color: 'black',
                    }
                }} />
    );
}

export default Seletor;