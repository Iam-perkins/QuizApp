import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native';
import React from 'react'


export default function start() {
  return (
    <>
<View>
     <Image source={require("@/assets/images/logo.png")} style={{width:'auto'}}></Image>
    </View>
    <View>
      <Text style={{fontWeight:'bold', fontSize:20, padding:10, margin:10, backgroundColor:'white', borderRadius:10, fontStyle:'italic'}}> welcome to trivia , the best for answering questions on your best or preferred topic, let's get started </Text>
      <TouchableOpacity style={{margin:20, padding:20,}}>
      <Link to='/Home'  style={{textAlign:'center', backgroundColor:'blue'}}>
        <Text style={{fontSize:30, margin:20, padding:20}}>START</Text>
      </Link>
      </TouchableOpacity>
    </View>
    </>
    
  )
}