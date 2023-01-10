import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import homeImg from '../assets/onboarding.png';


 export const Home = ({navigation}) => {
  return (
    <View style={styles.containerHome}>
      <Image source={homeImg} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={styles.title}>Aqui va el titulo del parrafo</Text>
        <Text style={styles.text}>Muchachos, ahora solo queda festejar, ya ganamos la tercera, ya somos campeón mundial.
         Y al Diego le decimos que descanse en paz; con Don Diego y con la Tota por toda la eternidad (aqui iba un texto mas largo)
        </Text>
      </View>

      <TouchableOpacity style={styles.inputs} onPress={() => navigation.navigate("Register")}>
        <Text>"Aqui va el boton"</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    alignItems: 'center',
    marginTop: 220,
  },
  image: {
    width: 230,
    height: 230,
  },
  title: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
  containerText: {
    textAlign: 'center',
    height: 200,
    width: 350,
    marginTop: 50,
    marginBottom: 50,
  },
});
