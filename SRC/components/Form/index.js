import React, { useState } from "react";
import {
  View,
  Text,
  Textimput,
  TouchableOpacity,
  Vibration,
} from "react-native";
import ResultIMC from "./ResultIMC/";
import styles from "./Style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [wight, setWight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e a Altura");
  const [imc, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    return setIMC((weight / (height * height)).toFixed(2));
  }
  function vericationIMC() {
    if (imc == null) {
      serErrorMessage("Campo Obrigatorio");
    }
  }

  function valadationIMC() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWight(null);
      setMessageIMC("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
      y;
      return;
    }
    vericationIMC();
    setIMC(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e a Altura");
  }

  return (
    <View style={styles.FormConstext}>
      <View style={styles.Form}>
        <Text style={styles.FormLabel}>Altura</Text>
        <Text style={styles.ErrorMessage}>{errorMessage}</Text>
        <Textimput
          style={styles.Input}
          onchangeText={setHeight}
          value={height}
          Placeholder="1.75"
          KeyboardType="numeric"
        ></Textimput>
        <Text style={styles.FormLabel}>Peso</Text>
        <Text style1={styles.ErrorMessage}>{errorMessage}</Text>
        <Textimput
          style={styles.Input}
          onchangeText={setWight}
          value={wight}
          Placeholder="75.500"
          KeyboardType="numeric"
        ></Textimput>
        <Button onPress={() => valadationIMC} title="Calcular" />
      </View>
      <TouchableOpacity
        style={styles.ButtonCalculator}
        onPress={() => {
          validationIMC();
        }}
      >
        <Text style={styles.TextoButtonCalculator}></Text>
      </TouchableOpacity>
      <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
    </View>
  );
}
