import React from 'react';
import { Pressable, Text,View } from 'react-native';
import styles from './styles';
export default function StyledButton(props) {
    const data=props.type
    const textcontent=props.content
    const onPress=props.onPress
    const backcolor=data==='grey'? 'grey':'whitesmoke';
    const textcolor=data==='grey'? 'whitesmoke':'grey';
    // console.warn(backround)
  return (
   <View style={styles.container}>
       <Pressable style={[styles.button,{backgroundColor:backcolor}]} onPress={()=>onPress()}>
           <Text style={[styles.text,{color:textcolor}]}>{textcontent}</Text>
       </Pressable>
   </View>
  );
}
