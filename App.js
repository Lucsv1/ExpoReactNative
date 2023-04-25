import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import img from './assets/aviao.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={img} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Vaigem</Text>
        </ImageBackground>
      </View>
      <View style={{flex: '70%'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "30%",
  },
  imgBck:{

  
  },

  header: {
    flex: 1,
    backgroundColor: "red",
  },
});
