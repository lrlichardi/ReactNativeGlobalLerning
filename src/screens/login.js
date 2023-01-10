import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextLink} from '../components/textLink';
import {Inputs} from '../components/Input';
import loginImg from '../assets/login.png';


export const Login = ({navigation}) => {

  /* 
      FALTA LA FUNCION DE LOGIN Y QUE EL TECLADO NO TAPE LA PANTALLA
  */
 

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.title}>Aqui va el titulo</Text>
      <Image source={loginImg} style={styles.image} />
      <View style={styles.containerInput}>
        <Inputs />
        <Inputs />
      </View>
      <View style={styles.containerlink}>
        <TextLink text={'Aqui va un link'} />
      </View>
      <View style={styles.containerButtons}>

        <TouchableOpacity style={styles.inputs}>
          <Text>Aqui va el boton</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Aqui va un texto <TextLink text={' aqui un link'} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    alignItems: 'center',
    marginTop: 190,
  },
  image: {
    width: 180,
    height: 180,
  },
  containerlink: {
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
  },
  containerInput: {
    alignItems: 'center',
    height: 170,
    width: 380,
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  containerButtons: {
    alignItems: 'center',
    height: 100,
    width: 380,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
