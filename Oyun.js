import React, { useState } from 'react';
import {
    View, Image,
    ImageBackground, Button, Text,
    StyleSheet, FlatList, styles, TouchableHighlight,indexOf
} from 'react-native';

let firstTap = null
let secondTap = null

let usedNumber=[]


let apeople = [
    { name: 'soner', id: 1, kartId: 1, visible: false,   status:true,   source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png' },
    { name: 'adnan', id: 2, kartId: 2, visible: false,   status:true,   source: 'https://previews.123rf.com/images/marco1987/marco19871803/marco1987180300424/96588089-planet-earth-icon-.jpg' },
    { name: 'arda',  id: 3, kartId: 3, visible: false,   status:true,   source: 'https://image.shutterstock.com/image-vector/coronavirus-2019ncov-corona-virus-icon-600w-1644823183.jpg' },
    { name: 'gökha', id: 4, kartId: 4, visible: false,   status:true,   source: 'https://surucukursumuz.com/wp-content/uploads/2018/11/icon.png' },
    { name: 'soner', id: 5, kartId: 1, visible: false,   status:true,   source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png' },
    { name: 'adnan', id: 6, kartId: 2, visible: false,   status:true,   source: 'https://previews.123rf.com/images/marco1987/marco19871803/marco1987180300424/96588089-planet-earth-icon-.jpg' },
    { name: 'ardaa', id: 7, kartId: 3, visible: false,   status:true,   source: 'https://image.shutterstock.com/image-vector/coronavirus-2019ncov-corona-virus-icon-600w-1644823183.jpg' },
    { name: 'gökh', id: 8, kartId: 4, visible: false,   status:true,   source: 'https://surucukursumuz.com/wp-content/uploads/2018/11/icon.png' },
]

let bpeople =[]

for( let i=apeople.length;  apeople.length - usedNumber.length  > 0; i--){
    
    let rndmSayi = Math.floor((Math.random() * 8) + 1)
    
        if(usedNumber.indexOf(rndmSayi) > -1){

        }else{
            console.log('rndmsayi', rndmSayi, 'apeople', apeople[rndmSayi - 1])
        bpeople.push(apeople[rndmSayi-1])
        
        usedNumber=[... usedNumber, rndmSayi]
        
        }
    
   
}
console.log('bpeople',bpeople)

export default function Oyun() {

   
    const [people, setPeople] = useState([...bpeople
    ])

    
    
    const [gorunus, setGorunus] = useState('none')

    

    const clickHandler = (item) => {

        const newPeople = [...people]
        
        
        if(!item.status){
            console.log('önceden bilinmiş')
        }else{
            if (!firstTap) {
                //ilk değişken atanıyor
                firstTap = item
                
                  
                  console.log('index',newPeople.indexOf(item));
                newPeople[newPeople.indexOf(item)].visible = !newPeople[newPeople.indexOf(item)].visible
                
                setPeople(newPeople)
                console.log(firstTap)
                
            } else if (!secondTap) {
                            
                if(firstTap === item){
                    //aynı kareye tıklanıp tıklanmadığı kontrol ediliyor
                    //aynısına tıklanmışsa bir şey yapılmıyor.
                    console.log('aynısına tıklandı')
                }else{
                    //farklı bir kareye tıklanmışsa ikinci değişkene atanıyor.
                    secondTap = item
                    newPeople[newPeople.indexOf(item)].visible = !newPeople[newPeople.indexOf(item)].visible
                    setPeople(newPeople)
                    console.log(secondTap)
                   
                    
                    if (firstTap.kartId == secondTap.kartId) {
                        //ilki ile ikinci karenin aynı olduğu durum
                        console.log("doğru bildi")
                        newPeople[newPeople.indexOf(firstTap)].status = false
                        newPeople[newPeople.indexOf(secondTap)].status = false
                        setPeople(newPeople)
                        setGorunus("tşk")
                        firstTap = null
                        secondTap = null
                    } else {
                        console.log('yanlış bildi')
                        
                            
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
                            console.log(1, newPeople)
                            
                            const newPeople2 = [...people]
                            console.log(2, newPeople2)
                            newPeople2[newPeople.indexOf(firstTap)].visible = false
                            newPeople2[newPeople.indexOf(secondTap)].visible = false
                            console.log(2, newPeople2)
                                console.log("np 1", newPeople2)
                                setPeople(newPeople2)
                                console.log("np 2", newPeople2)
                                firstTap = null
                                secondTap = null
                                console.log(firstTap, 'sdasd', secondTap)
                        }, 1000);
                            
                    }
                }
            }
        }  
    }

    

    return (
        <View>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        
                        
                        clickHandler(item)
                        
                    }}>
                        <View style={{ backgroundColor: 'orange', width: 70, height: 70, borderWidth: 1 }}>
                            {
                                item.visible ?
                                    <Image style={{ width: 70, height: 70 }} source={{ uri: item.source }} />
                                    : null
                            }
                        </View>
                    </TouchableHighlight>
                )}
            />

        </View>
    )
}



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