import React, { useState, useEffect } from 'react';
import {
    View, Image,
    ImageBackground, Button, Text,
    StyleSheet, FlatList, TouchableHighlight,indexOf
} from 'react-native';


let firstTap = null
let secondTap = null

let usedNumber=[]


let apeople = [
    { name: 'alchemy', id: 1,  kartId: 1, visible: false,   status:true,   source: require('./alchemy.png') },
    { name: 'baby',    id: 2,  kartId: 2, visible: false,   status:true,   source: require('./baby.png') },
    { name: 'batman',  id: 3,  kartId: 3, visible: false,   status:true,   source: require('./batman.png') },
    { name: 'eagle',   id: 4,  kartId: 4, visible: false,   status:true,   source: require('./eagle.png') },
    { name: 'alchemy', id: 5,  kartId: 1, visible: false,   status:true,   source: require('./alchemy.png') },
    { name: 'baby',    id: 6,  kartId: 2, visible: false,   status:true,   source: require('./baby.png') },
    { name: 'batman',  id: 7,  kartId: 3, visible: false,   status:true,   source: require('./batman.png') },
    { name: 'eagle',   id: 8,  kartId: 4, visible: false,   status:true,   source: require('./eagle.png') },
    { name: 'phone',   id: 9,  kartId: 5, visible: false,   status:true,   source: require('./phone.png') },
    { name: 'pistol',  id: 10, kartId: 6, visible: false,   status:true,   source: require('./pistol.png') },
    { name: 'mustache',id: 11, kartId: 7, visible: false,   status:true,   source: require('./mustache.png') },
    { name: 'einstein',id: 12, kartId: 8, visible: false,   status:true,   source: require('./einstein.png') },
    { name: 'phone',   id: 13, kartId: 5, visible: false,   status:true,   source: require('./phone.png') },
    { name: 'pistol',  id: 14, kartId: 6, visible: false,   status:true,   source: require('./pistol.png') },
    { name: 'mustache',id: 15, kartId: 7, visible: false,   status:true,   source: require('./mustache.png') },
    { name: 'einstein',id: 16, kartId: 8, visible: false,   status:true,   source: require('./einstein.png') },
    
]

let bpeople =[]

for( let i=apeople.length;  apeople.length - usedNumber.length  > 0; i--){
    
    let rndmSayi = Math.floor((Math.random() * 16) + 1)
    
        if(usedNumber.indexOf(rndmSayi) > -1){

        }else{
           // console.log('rndmsayi', rndmSayi, 'apeople', apeople[rndmSayi - 1])
        bpeople.push(apeople[rndmSayi-1])
        
        usedNumber=[... usedNumber, rndmSayi]
        
        }
    
   
}
//console.log('bpeople',bpeople)
let timer1=0

export default function Oyun() {


    const [timer, setTimer] = useState(0)
    useEffect(() => {
        
        timer2 = setInterval(() => {
        timer1=timer1 + 1
        setTimer(timer1)
        
        
        }, 1000);
        
    },[])

   
    const [people, setPeople] = useState([...bpeople
    ])

   
    
    const [gorunus, setGorunus] = useState('none')

    

    const clickHandler = (item) => {
        
        const newPeople = [...people]
        
        
        if(!item.status){
           // console.log('önceden bilinmiş')
        }else{
            if (!firstTap) {
                //ilk değişken atanıyor
                firstTap = item
                
                  
                  // console.log('index',newPeople.indexOf(item));
                newPeople[newPeople.indexOf(item)].visible = !newPeople[newPeople.indexOf(item)].visible
                
                setPeople(newPeople)
                // console.log(firstTap)
                
            } else if (!secondTap) {
                            
                if(firstTap === item){
                    //aynı kareye tıklanıp tıklanmadığı kontrol ediliyor
                    //aynısına tıklanmışsa bir şey yapılmıyor.
                   // console.log('aynısına tıklandı')
                }else{
                    //farklı bir kareye tıklanmışsa ikinci değişkene atanıyor.
                    secondTap = item
                    newPeople[newPeople.indexOf(item)].visible = !newPeople[newPeople.indexOf(item)].visible
                    setPeople(newPeople)
                   // console.log(secondTap)
                   
                    
                    if (firstTap.kartId == secondTap.kartId) {
                        //ilki ile ikinci karenin aynı olduğu durum
                     //   console.log("doğru bildi")
                        newPeople[newPeople.indexOf(firstTap)].status = false
                        newPeople[newPeople.indexOf(secondTap)].status = false
                        setPeople(newPeople)
                        setGorunus("tşk")
                        firstTap = null
                        secondTap = null
                        const dizi = people.map(item => item.status)

                        if(dizi.indexOf(true) === -1){
                            clearInterval(timer2)
                        }
                        console.log(dizi)
                       
                    } else {
                   //     console.log('yanlış bildi')
                        
                            
                        /* newPeople[firstTap.id - 1].visible = false
                        newPeople[newPeople.indexOf(item)].visible = false
                        // console.log("np 1", newPeople)
                        setPeople(newPeople)
                        // console.log("np 2", newPeople)
                        setGorunus("tşk")
                        firstTap = null
                        secondTap = null
                        console.log('firsttap', firstTap, 'secontap', secondTap) */
                        
                        setTimeout(() => {
                        //    console.log(1, newPeople)
                            
                            const newPeople2 = [...people]
                        //    console.log(2, newPeople2)
                            newPeople2[newPeople.indexOf(firstTap)].visible = false
                            newPeople2[newPeople.indexOf(secondTap)].visible = false
                        //    console.log(2, newPeople2)
                          //      console.log("np 1", newPeople2)
                                setPeople(newPeople2)
                          //      console.log("np 2", newPeople2)
                                firstTap = null
                                secondTap = null
                           //     console.log(firstTap, 'sdasd', secondTap)
                        }, 500);
                            
                    }
                }
            }
        }  
    }

    

    return (
        <View >
        <View style={styles.timer}><Text>{timer1}</Text></View>
            <FlatList
            style={styles.container}
                numColumns={4}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        
                        
                        clickHandler(item)
                        
                    }}>
                        <View style={{ backgroundColor: 'white', width: 70, height: 70, borderWidth: 1 }}>
                            {
                                item.visible ?
                                    <Image style={{ width: 70, height: 70 }} source={item.source} />
                                    : null
                            }
                        </View>
                    </TouchableHighlight>
                )}
            />

        </View>
    )
}
const styles =  StyleSheet.create({
    container:{ 
    
       
        
        marginTop:150,
        marginLeft:40,
    },
    timer:{
        alignItems:'center',
        paddingTop:20,
    }

})



/*
adımlar
1- tıklandığında tıklanılan fotoğraf görünmesi
2- ilk tıklanılanın tespit edilmesi
3- ikinci tıklanılanın tespit edilmesi
4- ilk ve ikinci tıklananın aynı olup olmadığının kontrol edilmesi
5- aynı ise açık kalması
6-ilkini ve ikinciyi sıfırla
6- farklı ise ters dönmesi
ilkini ve ikinciyi sıfırla
7- fotoğrafların random dağıtılması





*/
