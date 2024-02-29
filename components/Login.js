import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Image } from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#2D3250', flex:1 }}>
      <Image style={{  width: 355,height:250, position: 'absolute', top: 40,left:10}} source={require('../assets/Rectangle303.png')} />
      <Text style={{ fontWeight:'bold', fontSize:25, marginTop:210,left:30 , color:'white'}}>Welcome to</Text>
      <Text style={{ fontWeight:'', fontSize:20, marginTop:10,left:30 , color:'white'}}>EduQuiz</Text>
      <Text style={{ textAlign:'center', fontSize:15, marginTop:200 ,marginLeft:50,marginRight:50 , color:'grey'}}>Take your knowledge to the next level with EduQuiz - let's get started!</Text>
    <TouchableOpacity style={{ width:'80%',justifyContent:'center',  backgroundColor: '#F6B17A', height: 40,borderRadius:50, marginTop:10,alignItems:'center',alignSelf:'center'}} onPress={()=> navigation.navigate('LoginInput')} >
    <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign:'center', color:'black'}}>Masuk</Text>
</TouchableOpacity>
    </View>

    
  );
};

export default Login;
