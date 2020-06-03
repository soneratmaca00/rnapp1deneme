import React, { useState } from 'react';
import { View,Image, ImageBackground,Button,Text,StyleSheet } from 'react-native';


export default function Home (){



    return(
        <View style={styles.main}>
            
            <Image source={{uri:'https://i.ytimg.com/vi/fcO3W0cEfDg/maxresdefault.jpg'}} 
            style={styles.imageBackground}/>  
            
            <Image source={{uri:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c782e4c-fae0-4a87-b7b1-a752598d9df9/dbuykkc-b8c4b440-c123-49d9-82d6-8a969bb55cae.png/v1/fill/w_1024,h_268,strp/wwe_clash_of_champions_2017_logo_png_by_ambriegnsasylum16_dbuykkc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yNjgiLCJwYXRoIjoiXC9mXC8wYzc4MmU0Yy1mYWUwLTRhODctYjdiMS1hNzUyNTk4ZDlkZjlcL2RidXlra2MtYjhjNGI0NDAtYzEyMy00OWQ5LTgyZDYtOGE5NjliYjU1Y2FlLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2usSVQj7hX9rSniTqEhEG-qPMC0-D5xgOTefJG_Z2ME'}} 
            style={styles.imageChampion}/>  
            
            <View style={{position:'absolute', zIndex:11}}> 
                <Text style={{color:'white'}}>Champions</Text>
            </View>
            <View style={{position:'absolute', zIndex:11}}> 
                <Text style={{color:'white'}}>Counters</Text>
            </View>
            <View style={{position:'absolute', zIndex:11}}> 
                <Text style={{color:'white'}}>Rotaion</Text>
            </View>
            <View style={{position:'absolute', zIndex:11}}> 
                <Text style={{color:'white'}}>Sales</Text>
            </View>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'black'
    },

    imageBackground:{
        width:'100%', 
        height:'100%', 
        opacity:0.3
    },
    imageChampion:{
        width:'100%', 
        height:100, 
        marginTop:20, 
        zIndex:10, 
        position:'absolute'
    }
   
   });