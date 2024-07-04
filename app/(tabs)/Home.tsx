import { Button, StyleSheet, TouchableOpacity,ScrollView,Image } from 'react-native';
import React from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import{ Stack} from 'expo-router' ;
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/screens/types';
import destinationCategories from '@/data/components';
import { useRef, useState, useEffect } from 'react';
import Biology from '@/data/componentsB';
import { Link } from '@react-navigation/native';

//const ScrollSpy: React.FC = () => {
 // const scrollRef = useRef<ScrollView>(null);
  //const itemRefs = useRef<Array<TouchableOpacity>>([]);

  
  //const handleSelectCategory = (index: number) => {
   // if (scrollRef.current && itemRefs.current[index]) {
   //   const scrollX = itemRefs.current[index]._component.measure((x: number, y: number, width: number, height: number) => {
     //   scrollRef.current?.scrollTo({ x: x + width * index, y: 0, animated: true });
     // });

     // const destinationTag = `section${index + 1}`; 
     // const destinationOffset = index * itemRefs.current[index].layout.width;
    //  scrollRef.current.scrollTo({ x: destinationOffset, y: 0, animated: true });
   // }
 // };
//};

type HomeNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeNavigationProps;
}


const Home: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProps>();

  const handleNavigateToLevel = () => {
    navigation.navigate('chooseLevel');
  };
  const handleNavigateToLevelb = () => {
    navigation.navigate('clb');
  };

  const scroll = useRef<ScrollView>(null);
  const itemref= useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex , setActiveIndex]=useState(0);
  const handleSelectCategory=(index:number)=>{

    const selected= itemref.current[index];

    setActiveIndex(index);
    selected?.measure((x)=>{
        scroll.current?.scrollTo({x:x , y: 0, animated:true})
    })
  };
  
  
  return (
    <>
   
   <Stack.Screen options={{
        headerRight :()=>(
         <TouchableOpacity onPress={()=>{ }} style={styles.registration}>
          <Text>Login/SignIn</Text>
                <Ionicons name='notifications' size={30} color='green'/>
         </TouchableOpacity>
        ),
        headerLeft : ()=>(
          <TouchableOpacity></TouchableOpacity>
        )
      }}
  
      />
     
  <View style={styles.container}>
    <Text style={styles.title}> Topics</Text>
    <ScrollView 
    ref={scroll}
    horizontal contentContainerStyle={{
      gap:20,
        paddingVertical:10,
        marginBottom:10,
    }}>
         {destinationCategories.map((item , index)=>(
          <TouchableOpacity key={index} ref={(el)=> itemref.current[index]=el}


           onPress={()=> handleSelectCategory(index)} 

           style={ activeIndex== index? styles.newbtn :styles.btn}> 

          <MaterialCommunityIcons name={item.iconName as any} size={20} colors='blue'/>
            <Text style={ activeIndex== index? styles.newtxt :styles.btntxt}>{item.title}</Text>
          </TouchableOpacity>
        
         ))}
    </ScrollView>

     </View>
     <ScrollView>
    
     <View testID="section1">
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>Biology</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          
          <TouchableOpacity onPress={ handleNavigateToLevelb}>
            
            <Image source={require('@/assets/images/red-blood-cells.webp')} style={{width:250, height:250, borderRadius:10}} />
            
        <Text style={styles.imagestyle}>Cell Biology</Text>
      
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={ handleNavigateToLevelb}>
            <Image source={require('@/assets/images/genetics.webp')} style={{width:250, height:250 ,borderRadius:10}}/>
            
        <Text style={styles.imagestyle}>GENETICS</Text>
    
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevelb}>
            <Image source={require('@/assets/images/human-skeleton.webp')} style={{width:250, height:250, borderRadius:10}}/>
            <Text style={styles.imagestyle}>HUMAN ANATOMY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevelb}>
            <Image source={require('@/assets/images/ecology.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>ECOLOGY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevelb}>
            <Image source={require('@/assets/images/botany.jpg')} style={{width:250, height:250, borderRadius:10}}/>
            <Text style={styles.imagestyle}>BOTANY</Text>
          </TouchableOpacity>
         
        </View>
        </ScrollView>
      
     </View>

     
       
    
      
    
     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>English</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/grammar.jpg')} style={{width:250, height:250 ,borderRadius:10}} />
            <Text style={styles.imagestyle}>GRAMMAR</Text>
          </TouchableOpacity >
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/vocabulary.jpg')} style={{width:250, height:250, borderRadius:10}}/>
            <Text style={styles.imagestyle}>VOCABULARY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/comprehension.jpg')} style={{width:250, height:250, borderRadius:10}}/>
            <Text style={styles.imagestyle}>COMPREHENSION</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/writing.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>WRITING</Text>
          </TouchableOpacity>
        </View>
       
        </ScrollView> 
      
     </View>


     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>French</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/french1.webp')} style={{width:250, height:250,borderRadius:10}} />
            <Text style={styles.imagestyle}>GRAMMAIRE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/french2.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>VOCABULAIRE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/french3.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>COMPREHENSION</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/french4.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>ECRIRE</Text>
          </TouchableOpacity>
        </View>
       
        </ScrollView>
      
     </View>
     
     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>Sports</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/football.jpg')} style={{width:250, height:250,borderRadius:10}} />
            <Text style={styles.imagestyle}>FOOTBAll</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/handball.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>HANDBALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/basketball.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>BASKETBALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/olympic.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>OLYMPICS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/golf.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>GOLF</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      
     </View>
       
     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>General Knowledge</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/health and medicine.webp')} style={{width:250, height:250,borderRadius:10}} />
            <Text style={styles.imagestyle}>HEALTH & MEDICINE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/science.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>SCIENCE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/politics.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>POLITICS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/technology.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>TECHNOLOGY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/arts and culture.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>ARTS & CULTURE</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      
     </View>
       
     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>History</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/stone-age.webp')} style={{width:250, height:250,borderRadius:10}} />
            <Text style={styles.imagestyle}>Age of exploration</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/medieval.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>MEDIEVAL HISTORY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/renaissance.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>RENAISSANCE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/ancient civi.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>ANCIENT CIVILISATION</Text>
          </TouchableOpacity>
        </View>
       
        </ScrollView>
      
     </View>

     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>Chemistry</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/basicConcepts.webp')} style={{width:250, height:250,borderRadius:10}} />
            <Text style={styles.imagestyle}>BASIC CONCEPTS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/periodic-system.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>PERIODIC TABLE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/chemical-bonding.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>CHEMICAL BONDING</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/ancient civi.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>CHEMICAL REACTIONS</Text>
          </TouchableOpacity>
        </View>
       
        </ScrollView>
      
     </View>
     
     <View>
      <Text style={{fontSize:20, fontFamily:'sans-serif', fontWeight:'condensedBold'}}>Mathematics</Text>
     <ScrollView horizontal contentContainerStyle={{
          gap:25,
        }}>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/algebra.webp')} style={{width:250, height:250,borderRadius:10}} />
            <Text style={styles.imagestyle}>ALGEBRA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/arithmetic.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>ARITHMETIC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/geometry.webp')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>GEOMETRY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/trig.png')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>TRIGONOMETRY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageclick}>
          <TouchableOpacity onPress={handleNavigateToLevel}>
            <Image source={require('@/assets/images/calculus.jpg')} style={{width:250, height:250,borderRadius:10}}/>
            <Text style={styles.imagestyle}>CALCULUS</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      
     </View>
   
     </ScrollView>

   </>
   
  );

}
export default Home;
const styles = StyleSheet.create({
  container: {
    
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
    width: '10%',
  },
  header:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  registration:{
    flexDirection: 'row',
  },
  try:{
    backgroundColor:'yellow',
    width: 'auto',
    height:'auto',
    color:'black',
    flexDirection:'row',
  },
  headerbutton:{
    flexDirection:'row',
   
  },
  btn:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'blue',
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:10,
    shadowColor:'#333333',
    shadowOffset:{width:1, height:2},
    shadowOpacity:0.1,
    shadowRadius:1,
  },
  newbtn:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'green',
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:10,
    shadowColor:'#333333',
    shadowOffset:{width:1, height:2},
    shadowOpacity:0.1,
    shadowRadius:1,
  },
  btntxt:{
    margin:5,
    
  },
  newtxt:{
    margin:5,
    color:'orange',
  },
  container2:{
    backgroundColor:'white',
    height:'auto',
  },
  maths:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:10,
    shadowColor:'#333333',
    shadowOffset:{width:1, height:2},
    shadowOpacity:0.1,
    shadowRadius:1,
    
  },
  imageclick:{
    backgroundColor:'white',
    borderRadius:10,
    flex:1,
    flexDirection:'row',
    borderCurve:'circular',
    borderBottomColor:'grey',
    margin:10,
  
  },
  imagestyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'red',
    textAlign:'center',
    fontFamily:'sans-serif',
  },
  
});
