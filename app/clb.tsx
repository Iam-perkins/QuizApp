import React from 'react';
import { StyleSheet, TouchableOpacity,ScrollView,View,Text } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import{ Stack} from 'expo-router' ;
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/screens/types';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


type LevelNavigationProps = StackNavigationProp<RootStackParamList, 'clb'>;

const Level: React.FC = () => {
  const navigation = useNavigation<LevelNavigationProps>();

  return (
    <>
   <Stack.Screen options={{ title: 'Back' }} />
    <View>
      <Text style={{ color:'green', textAlign:'center', fontSize:50,margin:50, padding:10}}>Select Level</Text>
      <Text style={{  color:"white",textAlign:'center', fontWeight:'light',margin:10}}>choose a  difficulty level for the questions</Text>
      <ScrollView horizontal  contentContainerStyle={{
      gap:1,
        paddingVertical:10,
        marginBottom:10,
    }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={(styles)=>{Color:'red'}}>
        <Link to='/reasybio'>
          <Text style={styles.buttonText}>Easy</Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
        <Link to='/reasybio'>
          <Text style={styles.buttonText} >Normal</Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
        <Link to='/rhardbio'>
          <Text style={styles.buttonText} >Hard</Text>
        </Link>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </>
    
  );
};

export default Level;
const styles= StyleSheet.create({
buttonContainer:{
  backgroundColor:'blue',
  borderRadius:5,
  fontSize:20,
  width:'auto',
  height:'auto',
  margin:30,
  padding:10,
  textAlign:'center',
  marginTop:80

  
},
buttonText:{
  fontFamily:'sans-serif',
  fontWeight:'bold',
  fontStyle:'normal',
  fontSize:20
}
})