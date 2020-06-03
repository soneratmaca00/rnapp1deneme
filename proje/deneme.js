import React, {useState} from 'react';
import {  View, Text, Image, StyleSheet, Button  } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png'
    ,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image:
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png'
,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image:  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png'
    ,
    backgroundColor: '#22bcb5',
  }
];

export default function Deneme () {
  
  const [showRealApp, setShowRealApp] = useState(false)
  _renderItem = ({ item }) => {
    console.log(item.image)
    return (
      
      <View style={[styles.slide, {backgroundColor:item.backgroundColor}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={{ width: 70, height: 70 }} source={{uri: item.image}} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _renderNextButton = () => {
    return(
      <View style={styles.buttonCircle}>
      <View style={styles.signup}>
                <Text style={styles.signuptext}>Sign Up</Text>
            </View>
    </View>
    )
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp( true );
  }
  return(
    
      
         <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} 
         activeDotStyle={{backgroundColor: 'red'}}  
          renderNextButton={this._renderNextButton} bottomButton showSkipButton={false}/>


  )

    
  
}

const styles=  StyleSheet.create({
  slide:{
   
    width:'100%',
    height:'100%',
  }
  
})