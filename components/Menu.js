import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/category.jpg')} style={styles.container}>
    <TouchableOpacity style={{marginRight: 300}} onPress={()=> navigation.navigate('BantuanScreen')}>
    <Image  source={require('../assets/tanya.png')} style={{height: 30, width: 30, marginTop: 20, marginRight: -200}}/>
    </TouchableOpacity>
      <Text style={{marginTop: 20, fontSize: 25, fontWeight: 'bold', color: 'white'}}>Category</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MenuItem navigation={navigation} icon={require('../assets/science.png')} title="Sains" category="Sains" />
        <MenuItem navigation={navigation} icon={require('../assets/maths.png')} title="Matematika" category="Matematika" />
        <MenuItem navigation={navigation} icon={require('../assets/history.png')} title="Sejarah" category="Sejarah" />
      </ScrollView>
    </ImageBackground>
  );
}

const MenuItem = ({ navigation, icon, title, category }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(category)}>
      <View style={styles.menuItemContent}>
        <Image style={styles.menuItemIcon} source={icon} resizeMode="contain" />
        <Text style={styles.menuItemTitle}>{title}</Text>
      </View>
      <Text style={{marginBottom: 25, marginLeft: 50}}>20 soal</Text>
    </TouchableOpacity>
  );
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: '0.7',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    marginTop: 50
  },
  menuItem: {
    marginTop: 15,
    alignItems: 'left',
    width: windowWidth * 0.8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#7077A1',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 100,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingTop: 10, 
  },
  menuItemIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: 10,
    marginTop: 15,
    marginBottom: -10
  },
  menuItemTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: windowWidth * 0.05,
  },
});

export default Menu;
