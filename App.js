import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CartItem from './components/CarItem/CarItem';
import CarList from './components/CarList/CarList';
import Header from './components/Header/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
    <CarList/>
     {/* <CartItem name="ModelY" img={require('./assets/images/ModelY.jpeg')} tagline={"Order Online For"} taglineCTA={"Touch Delivery"}/> */}
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  carContainer:
  {
   height:'100%',
   width:'100%',
   
   alignItems:'center',
  
  },
  title:{
    // fontSize:'40',
    fontWeight:'bold',
    fontSize:40,
    marginTop:'30%',
  },
  subtitle:{
    fontSize:16,
    color:'#5e5c62'

  },
  image:{
    height:'100%',
   width:'100%',
   position:'absolute'
  //  backgroundSize:'contains'
  }
});
