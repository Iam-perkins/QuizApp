import { StyleSheet, TouchableOpacity , ScrollView} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import{Stack} from 'expo-router' ;
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


export default function TabthreeScreen() {
  return (
    <>
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
    <ScrollView>
      <View style={styles.containers}>
        <Text>yooo</Text>
      </View>
      <View style={styles.containerss}>
        <Text>list of peopls who took  the test will show here</Text>
      </View>
    </ScrollView>

    </>
   
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'grey',
    height:300,
    borderBottomEndRadius:200
    

  },
  containerss:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    height:'auto',
    borderTopStartRadius:200
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
