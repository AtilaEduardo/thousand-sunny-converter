import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

interface Moeda {
    label: string;
    value: string;
}

interface SeletorProps {
    moeda: Moeda[];
    onChange: (valor: string | null) => void;
}

const Seletor: React.FC<SeletorProps> = (props) => {
    const placeHolder = {
        label: 'Selecione sua Moeda',
        value: null,
        color: 'black',
    };

    return (
        <RNPickerSelect
            placeholder={placeHolder}
            items={props.moeda}
            onValueChange={(valor) => props.onChange(valor)}
            style={{
                inputAndroid: {
                    fontSize: 20,
                    color: 'black',
                },
                inputIOS: {
                    fontSize: 20,
                    color: 'black',
                }
            }} />
    );
}

export default Seletor;