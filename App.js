import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let [numeros, setNumeros] = useState([]);

  const gerarMegaSena = () => {
    numeros = [] // limpa o array anterior
    while(numeros.length != 6) {
      numeros.push(Math.floor(Math.random() * 60) + 1);

      numeros = numeros.filter((item, index) => {
        return numeros.indexOf(item) === index;
      });
    }

    setNumeros( [ numeros ]); // seta o array com os 6 n gerados
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={ styles.tituloText }>Sortear números:</Text>
        <Button 
          title="Gerar dezenas MEGA SENA"
          onPress={gerarMegaSena}
        />
        <Text style={ styles.subTituloText }> { numeros.map(numero => `${numero}`) }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tituloText: {
        marginBottom: 16, fontSize: 22, color: '#696969'
    },
    subTituloText: {
        marginTop: 16, fontSize: 20, color: '#2c385e'
    },
    cardView: {
      textAlign: 'center',
      borderWidth: 3,
      borderColor: '#f44336',
      padding: 15,
      backgroundColor: '#ffebee',
      borderRadius: 10,
    }
});
