  import { Text, View } from 'react-native'
  import React, { Component } from 'react'
import { useLocalSearchParams } from 'expo-router'
  
  const listingDetails = ()=> {
      const {id}= useLocalSearchParams()
      return (
        <View>
          <Text>listing{id}</Text>
        </View>
      )
    }
  export default listingDetails 