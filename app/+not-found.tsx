import {  Stack } from 'expo-router';
import { StyleSheet , Image} from 'react-native';
import { Link } from '@react-navigation/native';
import { Text, View } from '@/components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'click Here' }} />
      <View style={styles.container}>
        <Text style={styles.title}>home</Text>

        <Link to="/Home" style={styles.link}>
          <Text style={styles.linkText}>start!</Text>
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
