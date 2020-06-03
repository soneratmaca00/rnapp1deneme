import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, 
  TextInput,
  Button
} from 'react-native';

export default function AddTodo( {submitHandler} ) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText (val)
        
    }


    return(
        <View>
            <TextInput
                style={styles.Input}
                placeholder='new todo...'
                onChangeText={(text) => changeHandler(text)}
            />
            <Button onPress={() => submitHandler(text)} title='add to do' color='coral' />
        </View>

    )
}

const styles=  StyleSheet.create({
    Input:{ 
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'

    }

})