import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from "react-native";
import img from "./assets/aviao.jpg";
import React, { useState } from "react";

export const Componente = () => {
  const [lista, setLista] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#a6af9f'}}>
      <Text style={{textAlign: 'center'}}>Preencha o formulario a baixo</Text>
      <View style={{flex: 1, justifyContent: 'center', marginTop: '20%', width: "50%"}}>
        <Text style={{textAlign: 'center'}}>Nome</Text>
        <TextInput style={{borderColor: 'black', backgroundColor: 'white', borderRadius: 10, color: 'white'}} />
        <Text style={{textAlign: 'center', marginTop : 10}}>Destino</Text>
        <TextInput style={{borderColor: 'black', backgroundColor: 'white', borderRadius: 10, color: 'white', marginBottom: 10}} />
        <Text style={{textAlign: 'center'}}>Data de embarque</Text>
        <TextInput style={{borderColor: 'black', backgroundColor: 'white', borderRadius: 10, color: 'white', marginBottom: 15}} />

        <Button title="salvar"/>
      </View>
      <View style={{flex: 2}}>

      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={img}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              opacity: 0.8,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 40 }}>Viagem</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 2 }}>
        <Componente />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBck: {},

  header: {
    flex: 1,
    backgroundColor: "red",
  },
});
