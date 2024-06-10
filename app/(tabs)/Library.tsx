import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import{Stack} from 'expo-router' ;
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TabTwoScreen() {
  return (
    <View>
    <Stack.Screen options={{
      headerRight :()=>(
       <TouchableOpacity onPress={()=>{ }}>
              <Ionicons name='notifications' size={30} color='green'/>
       </TouchableOpacity>
      ),
      headerLeft : ()=>(
        <TouchableOpacity></TouchableOpacity>
      )
    }}
    />

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
