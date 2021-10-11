import React from 'react';
import {Text, View ,StyleSheet, ImageBackground} from 'react-native';
import styles from './styles';

export default function Header() {
  return (
<View style={styles.HeaderContainer}>
 <ImageBackground style={styles.logo} source={require('../../assets/images/logo.png')}/>
 <ImageBackground style={styles.menu} source={require('../../assets/images/menu.png')}/>
</View>
  );
}
