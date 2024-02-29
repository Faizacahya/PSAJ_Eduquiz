import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const App = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/9030217.jpg')} style={styles.backgroundImage} opacity={0.5}>
  <View style={styles.loginContainer}>
    <Text style={styles.loginText}>Selamat Datang</Text>
    <Text style={{ fontSize: 14, color: 'white', marginBottom: 5, textAlign: 'left', paddingTop: 15, marginLeft: 20, alignSelf: 'left' }}> Masukkan Nama Anda </Text>
    <TextInput placeholder={`Masukkan nama Anda`} style={{ color: 'black', width: '90%', height: 40, borderRadius: 10, alignSelf: 'center', backgroundColor: 'white', marginTop: 5, borderWidth: 1, borderColor: 'lightgrey', paddingLeft: 10 }} />

    <Text style={{ fontSize: 14, color: 'white', marginBottom: 5, textAlign: 'left', paddingTop: 15, marginLeft: 20, alignSelf: 'left' }}> Masukkan Kelas Anda </Text>
    <TextInput placeholder={`Masukkan kelas Anda`} style={{ color: 'black', width: '90%', height: 40, borderRadius: 10, alignSelf: 'center', backgroundColor: 'white', marginTop: 5, borderWidth: 1, borderColor: 'lightgrey', paddingLeft: 10 }} />

    <TouchableOpacity style={{ width:'40%', alignSelf: 'center',  backgroundColor: '#7077A1', paddingTop:10, height: 40,borderRadius:50, marginTop:20, left:65}}  onPress={()=> navigation.navigate('Menu')}>
    <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign:'center', color:'white'}}>Masuk</Text>
</TouchableOpacity>
  </View>
</ImageBackground>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Warna hitam dengan opasitas 50%
    padding: 20,
    borderRadius: 10,
    width:300,
    height:290
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
}
});

export default App;
