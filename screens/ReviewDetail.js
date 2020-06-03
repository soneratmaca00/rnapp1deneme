import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native'

export default function ReviewDetail({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>ReviewDetail page</Text>
            <Button
        title="Go to Details... again"
        onPress={() => navigation.push('ReviewDetail')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        
    }
})