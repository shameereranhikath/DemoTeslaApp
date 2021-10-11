import React from 'react';
import { Text,View,ImageBackground,StyleSheet } from 'react-native';
import StyledButton from '../StyledButton/StyledButton';
 import styles from './styles'

export default function CarItem(prop) {

  const {name,tagline,taglineCTA,image,id}=prop.car
  // console.log({image})
  return (
//  <View>
     
//      {/* <Text>Haloooooo</Text> */}
     
//      </View>
 <View style={styles.carContainer} key={id}>
   <ImageBackground source={image} style={styles.image} key={id} />
  <View style={styles.titles} key={id}>
      <Text style={styles.title}key={id} >{name}</Text>
      <Text style={styles.subtitle} key={id}>{tagline} &nbsp;
      <Text style={styles.subtitleCTA} key={id}>{taglineCTA}</Text>
      </Text>  
   </View>
   <View style={styles.buttonContainer} key={id}>
      <StyledButton type="grey" content="Custom Order" onPress={()=>console.warn("Pressed on Custom Order")} key={id}/>
      <StyledButton type="whitesmoke" content="Existing Inventory" onPress={()=>console.warn("Pressed on Existing Inventory")} key={id}/>
   </View>

  
 </View>
  );
}

//  const styles = StyleSheet.create({
//     carContainer:
//     {
//      height:'100%',
//      width:'100%',
//      alignItems:'center'
//     },
//     title:{
//       // fontSize:'40',
//       fontWeight:'bold',
//       fontSize:40,
//       marginTop:'30%',
//     },
//     subtitle:{
//       fontSize:16,
//       color:'#5e5c62'
  
//     },
//     image:{
//       height:'100%',
//      width:'100%',
//      position:'absolute'
//     //  backgroundSize:'contains'
//     }
//   });


