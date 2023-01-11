import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextLink} from '../components/textLink';
import {Inputs} from '../components/Input';
import loginImg from '../assets/login.png';
import {email, password, titleSesion} from '../text-es.js';
import Button from '../components/Button';

export const Login = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.title}>{titleSesion}</Text>
      <Image source={loginImg} style={styles.image} />
      <View style={styles.containerInput}>
        <Inputs placeholder={email} onChangeText={text => setEmailInput(text)} />
        <Inputs
          placeholder={password}
          typeInput="password"
          onChangeText={text => setPasswordInput(text)}
        />
      </View>
      <View style={styles.containerlink}>
        <TextLink text={'Aqui va un link'} />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.inputs}>
          <Button title='Iniciar sesión' action={() => console.log('boton preisonado')}/>
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
