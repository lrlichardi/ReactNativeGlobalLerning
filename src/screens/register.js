import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextLink} from '../components/textLink';
import {Inputs} from '../components/Input';
import {userRegister} from '../function/userRegister';

export const Register = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  /**
   *  
   */

  return (
    <KeyboardAvoidingView // AL SALIR EL TECLADO ME SIGUE TAPANDO LA PANTALLA :/
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.containerRegister}>
        <Text style={styles.title}>Aqui va el titulo</Text>
        <Text style={styles.text}>Aqui va una especie de subtitulo</Text>
        <View style={styles.containerInput}>
          <Inputs
            onChangeText={text => setName(text)}
            placeholder={'Ingrese su nombre'}
          />
          <Inputs
            onChangeText={text => setEmail(text)}
            placeholder={'Ingrese su email'}
          />
          <Inputs
            onChangeText={text => setPassword(text)}
            placeholder={'Ingrese su contraseña'}
          />
          <Inputs
            onChangeText={text => setAge(text)}
            placeholder={'Ingrese su edad'}
          />
        </View>
        <View style={styles.containerButtons}>

          <TouchableOpacity
            onPress={() => userRegister(name, email, password, age)}
            style={styles.inputs}>
            <Text>Aqui va el boton</Text>
          </TouchableOpacity>

          <Text style={styles.text}>
            Aqui va un texto{' '}
            <TextLink
              text={' aqui un link'}
              navegacion={{/*
            () => navigation.navigate("Home")   ESTO NO PUDE HACER QUE FUNCIONE :/
          */}}
            />
          </Text>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerRegister: {
    alignItems: 'center',
    marginTop: 220,
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
    height: 330,
    width: 380,
    marginTop: 50,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginBottom: 40,
  },
  containerButtons: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: 10,
  },
});
