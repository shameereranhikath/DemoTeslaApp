import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    HeaderContainer:
    {
 width:'100%',
 position:'absolute',
 top:50,
 flexDirection:'row',
 justifyContent:'space-between',
 paddingHorizontal:10,
 zIndex:100
    },
    logo:
    {
   height:25,
    width:200,
    resizeMode:'cover'
    },
    menu:
    {
     height:25,
     width:25
    }
});

export default styles;