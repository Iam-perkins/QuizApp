import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default function _layout() {
  return (
    //change  tab icons and background color
    <Tabs>
      <Tabs.Screen name='Home' options={{tabBarIcon : ({color}) =>(
        <Ionicons name='home' size={28} color={color}/>
      )}}/>
      <Tabs.Screen name='Library' options={{tabBarIcon : ({color}) =>(
        <Ionicons name='library' size={28} color={color}/>
      )}} />
      <Tabs.Screen name='Search' options={{tabBarIcon : ({color}) =>(
        <Ionicons name='search' size={28} color={color}/>
      )}}/>
      <Tabs.Screen name='Board' options={{tabBarIcon : ({color}) =>(
        <Ionicons name='trophy' size={28} color={color}/>
      )}}/>
      <Tabs.Screen name='Profile' options={{tabBarIcon : ({color}) =>(
        <FontAwesome name='user' size={28} color={color}/>
      )}}/>
    </Tabs>
  )
}