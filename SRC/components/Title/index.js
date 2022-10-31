import React from 'react';
import { View, Text, Button} from 'react-native'
import styles from "./style"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTittle}>Calculadora</Text>
        </View>
    );
}