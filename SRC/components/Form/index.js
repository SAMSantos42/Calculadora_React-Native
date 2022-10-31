import React, {useState} from 'react';
import { View, Text, Textimput, TouchableOpacity} from 'react-native'
import ResultIMC from './ResultIMC/';
import styles from './Style';

export default function Form(){

    const[height, setHeight]=useState(null)
    const[wight, setWight]=useState (null)
    const[messageIMC, setMessageIMC]=useState ("Preencha o peso e a Altura")
    const[imc, setIMC]=useState (null)
    const[textbutton, setTextButton]=useState ("Calcular")


    function imcCalculator(){
        return setIMC((weight/(height*height)).toFixed(2))
    }

    function valadationIMC(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWight(null)
            setMessageIMC("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            return
        }
        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e a Altura")
    }

    return(
        <View style={styles.FormConstext}>
            <View style={styles.Form}>
                <Text style={styles.FormLabel}>Altura</Text>
                <Textimput
                style={styles.Input}
                onchangeText={setHeight}
                value={height}
                Placeholder="1.75"
                KeyboardType="numeric"
                ></Textimput>
                <Text style={styles.FormLabel}>Peso</Text>
                <Textimput
                style={styles.Input}
                onchangeText={setWight}
                value={wight}
                Placeholder="75.500"
                KeyboardType="numeric"
                ></Textimput>
                <Button 
                onPress={()=> valadationIMC}
                title='Calcular'/>
            </View>
            <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={()=> {validationIMC()}}>
                <Text style={styles.TextoButtonCalculator}></Text>
            </TouchableOpacity>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    );
}