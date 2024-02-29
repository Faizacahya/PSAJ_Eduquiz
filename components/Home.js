import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';


const Home = ({navigation}) => {
  return(
    <View style={{ backgroundColor: '#2D3250', flex:1 }}>
      <View style={{ flexDirection: 'column' , textAlign:'center'}}>

     
      <Image style={{ width: 340, position: 'absolute', top: 50, left: 18, shadowColor: '#000', shadowOffset: { width: -3, height: 5 }, shadowOpacity: 0.25, shadowRadius: 4 }} source={require('../assets/Rectangle303.png')} />
      

      <Text style={{marginLeft:30, fontWeight:'bold', fontSize:25, marginTop:240 , color:'white'}}>Welcome to</Text>
      <Text style={{marginLeft:30, fontSize:18, marginTop:10 , color:'white'}}>Eduquiz</Text>
      </View>

      <Text style={{marginLeft:70,marginRight:70, fontSize:15, marginTop:140 , color:'darkgrey', textAlign:'center'}}>Take your knowledge to the next level with EduQuiz - let's get started!</Text>

      <View style={{marginTop:75}}>
      <TouchableOpacity style={{ width:'70%', alignSelf: 'center',  backgroundColor: '#F6B17A', padding: 5, paddingTop:15, height: 50, borderRadius: 50}} press={() => navigation.navigate('LoginInput')}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign:'center', color:'black'}}>Log In</Text>
    </TouchableOpacity>
      </View>

      <View style={{marginTop:15}}>
      <TouchableOpacity style={{ width:'70%', alignSelf: 'center',  backgroundColor: '#7077A1', padding: 5, paddingTop:15, height: 50, borderRadius: 50}}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign:'center', color:'white'}}>Register</Text>
    </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;
