import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoItem({ item, pressHandler }){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.id)
        }>
            <View style={styles.item}>
                <Text >{ item.text }</Text>
                <Icon name="trash" size={18} color="#900"  style={styles.itemIcon}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
        justifyContent: 'space-between'
        
    },
    

})