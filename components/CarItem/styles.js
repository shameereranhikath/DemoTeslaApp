import { StyleSheet,Dimensions } from "react-native";

  const styles = StyleSheet.create({
    carContainer:
    {
    //  height:'100%',
    height:Dimensions.get('window').height,
     width:'100%',
     alignItems:'center'
    },
    title:{
      // fontSize:'40',
      fontWeight:'bold',
      fontSize:40,
      marginTop:'30%',
      textAlign:"center"
    },
    subtitle:{
      fontSize:16,
      color:'#5e5c62'
  
    },
    subtitleCTA:{
      textDecorationLine:'underline'
  
    },
    image:{
      height:'100%',
     width:'100%',
     position:'absolute'
     //resizeMode:'contains'
    //  backgroundSize:'contains'
    },
    buttonContainer:{
      position:'absolute',
      bottom:50,
      width:'100%'
    }
  });

  export default   styles;