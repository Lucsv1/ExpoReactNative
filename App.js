import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from "react-native";
import img from "./assets/aviao.jpg";
import React, { useState } from "react";

export const Componente = () => {
  const [lista, setLista] = useState([])
  const [nome, setNome] = useState("");
  const [destino, setDestino] = useState("");
  const [dtEmbarque, setDataEmbarque] = useState("")

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#a6af9f'}}>
      <Text style={{textAlign: 'center'}}>Preencha o formulario a baixo</Text>
      <View style={{flex: 1, justifyContent: 'center', marginTop: '20%', width: "50%"}}>
        <Text style={{textAlign: 'center'}}>Nome</Text>
        <TextInput value={nome} style={{borderColor: 'black', backgroundColor: 'black', borderRadius: 10, color: 'white'}} onChangeText={setNome} />
        <Text style={{textAlign: 'center', marginTop : 10}}>Destino</Text>
        <TextInput value={destino} style={{borderColor: 'black', backgroundColor: 'black', borderRadius: 10, color: 'white', marginBottom: 10}} onChangeText={setDestino} />
        <Text style={{textAlign: 'center'}}>Data de embarque</Text>
        <TextInput value={dtEmbarque} style={{borderColor: 'black', backgroundColor: 'black', borderRadius: 10, color: 'white', marginBottom: 15}} onChangeText={setDataEmbarque} />
        <Button title="salvar" onPress={()=>{
          const obj = {nome, destino, dtEmbarque}
          setLista([...lista, obj])
        }}/>
      </View>
      <View style={{flex: 3, marginTop: 50}}>
        {lista.map((o, index) =>(
           <View key={index}>
           <Text>nome: {o.nome}</Text>
           <Text>destino: {o.destino}</Text>
           <Text>data de embarque: {o.dtEmbarque}</Text>
         </View>
        ))}
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
