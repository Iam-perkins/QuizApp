import { StyleSheet ,Text , View, Image} from 'react-native';
import React from 'react';




export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image style = {styles.img} source = {require("@/assets/images/profile.png")}></Image>
      <Text style={styles.title}>Ado Cardine</Text>
      <Text style = {styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum dolor quidem quasi numquam accusamus sed</Text>
      <View style={styles.separator} />

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

  text: {
    textAlign: "center",
    marginTop: 10,
     color:'white'
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  img: {
    height: 200,
    width: 200
  }
});
