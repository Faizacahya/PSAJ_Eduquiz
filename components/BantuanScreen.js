import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';

const Menu = () => {
  return(
    <View style={{ backgroundColor: '#2D3250', flex:1 }}>
    <ScrollView>
      <View style={{ flexDirection: 'column' , textAlign:'center'}}>
      <Text style={{ textAlign: 'center', fontSize:25, marginTop:70 , color:'white'}}>How to do the quiz?</Text>
      <View style={{ marginTop: 70, alignItems: 'center', height: 90, width: 290, shadowColor: 'grey', shadowOffset: { width: 5, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, backgroundColor: '#F6B17A', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft:15 }}>
          <View style={{ alignItems: 'center', marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, left:10, top:-10 }}>Langkah 1</Text>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 11, left:-73, top:15 }}>Pilih kuis yang ingin dikerjakan pada menu utama</Text>
            </View>
          </View>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center', height: 90, width: 290, shadowColor: 'grey', shadowOffset: { width: 5, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, backgroundColor: '#F6B17A', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft:15 }}>
          <View style={{ alignItems: 'center', marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, left:10, top:-10 }}>Langkah 2</Text>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 11, left:-73, top:15 }}>Masuk kuis dan mulailah mengerjakan kuis</Text>
            </View>
          </View>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center', height: 90, width: 290, shadowColor: 'grey', shadowOffset: { width: 5, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, backgroundColor: '#F6B17A', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft:15 }}>
          <View style={{ alignItems: 'center', marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, left:10, top:-10 }}>Langkah 3</Text>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 11, left:-73, top:15 }}>Pilihlah jawaban yang menurut Anda paling benar</Text>
            </View>
          </View>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center', height: 90, width: 290, shadowColor: 'grey', shadowOffset: { width: 5, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, backgroundColor: '#F6B17A', borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginLeft:15 }}>
          <View style={{ alignItems: 'center', marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, left:10, top:-10 }}>Langkah 4</Text>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 11, left:-73, top:15 }}>Skor yang diperoleh akan ditampilkan</Text>
            </View>
          </View>
      </View>

      </View>
      </ScrollView>
    </View>
  )
}

export default Menu;
