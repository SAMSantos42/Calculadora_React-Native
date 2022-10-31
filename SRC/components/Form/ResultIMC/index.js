import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';

export default function ResultIMC(props){
    return(
        <View style={styles.ResultIMC}>
            <Text style={styles.information}>{props.resultIMC}</Text>
            <Text style={styles.NumberIMC}>{props.messageResultIMC}</Text>
        </View>
    );
}