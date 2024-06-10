import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function onboarding() {
  return (
    <View style={StyleSheet.container}>
      <FlatList/>
    </View>
  )
};
const styles = StyleSheet.create({
      container:{
        Flex :1,
        justifyContents:'center',
        alignItems:'center',
      },
});