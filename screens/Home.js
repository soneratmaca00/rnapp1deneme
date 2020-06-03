import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyle } from '../styles/global'


export default function Home({ navigation }) {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home page</Text>
            <Button title="go details" onPress={() => navigation.navigate("ReviewDetail")} />
        </View>
    )
}


