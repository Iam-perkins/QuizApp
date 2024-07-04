import {  Stack } from 'expo-router';
import React from 'react';
import { StyleSheet , Image} from 'react-native';
import { Link } from '@react-navigation/native';
import { Text, View } from '@/components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'click Here' }} />
      <View style={styles.container}>
        <Text style={styles.title}></Text>

        <Link to="/start" style={styles.link}>
          <Text style={styles.linkText}>lets go!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 30,
    color: '#2e78b7',
  },
});
