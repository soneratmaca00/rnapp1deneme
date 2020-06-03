import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}> My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 header:{
    height: 80,
    backgroundColor: 'coral',
    justifyContent:'center'

 },
 title:{
     textAlign:'center',
    color: '#fff',
    fontSize: 24,
    fontWeight:'bold',
 }
})