import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Menu = () => {
  return(
    <View style={{ backgroundColor: '#2D3250', flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <LinearGradient
          colors={['#424769', '#CFAE87']}
          style={{ alignItems: 'center', justifyContent: 'center', flex: 0.5, zIndex: 1,height: 200, borderRadius: 30, width:300 }}>
          <Image style={{ width: 120, height: 120, marginTop:'', shadowColor: '#000', shadowOffset: { width: -3, height: 5 }, shadowOpacity: 0.25, shadowRadius: 4  }} source={require('../assets/thropy.png')} />
          <Text style={{marginTop:20, fontWeight:'bold', fontSize:16}}> Congrats!</Text>
          <Text style={{color:'#488523',marginTop:20, fontWeight:'bold', fontSize:25}}> 100% Score!</Text>
          <Text style={{color:'black',marginTop:20, fontWeight:'bold', fontSize:16}}>Quiz completed successfully</Text>
      </LinearGradient>
      <View style={{ margin:20, flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center', alignContent:'center' }}>
        <View style={{ alignItems: 'center', height: 40, width: 120, backgroundColor: '#F6B17A', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
          <Text style={{marginLeft:25,color: 'black', fontWeight:'bold' }}>Try Again</Text>
        </View>
        <View style={{ alignItems: 'center', height: 40, width: 120, backgroundColor: '#7077A1', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
  <Text style={{ color: 'white', marginLeft:45, fontWeight:'bold' }}>Quit</Text>
</View>

      </View>
    </View>
  )
}

export default Menu;
