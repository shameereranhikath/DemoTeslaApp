import React from 'react';
import styles from './styles'
import { Text,View,FlatList,Dimensions } from 'react-native';
import Cars from './Cars'
import CarItem from '../CarItem/CarItem'

export default function CarList() {
    // const renderItem = Cars.map((item,index)=>
    // {
    //     console.log('eee'+item.name+'index-'+index);
    // })
    // const renderItem = ({ item }) => (
    //     <CarItem car={item} />
    //   );

  return (
  <View style={styles.Listcontainer}>
      {/* <FlatList data={Cars} renderItem={renderItem} keyExtractor={item => item.id}/> */}
      <FlatList data={Cars} renderItem={({item})=><CarItem car={item}/>} keyExtractor={item => item.id} Key={item => item.id} showsVerticalScrollIndicator={'false'}  snapToAlignment={'start'} decelerationRate={'fast'} snapToInterval={Dimensions.get('window').height}/>
      {/* <Text>Not Just a Component</Text> */}
  </View>
  );
}
