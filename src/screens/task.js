import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from '../components/Button';

export const Tarea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <Text style={styles.title}>Lista de Tareas</Text>
      </View>

      <View style={styles.containerButton}>
        <Button title={'Crear tarea'} />
        <Button title={'Sacar una foto'} />
        <Button title={'Layout'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerTask: {
    height: '60%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    padding: 20,
  },
  containerButton: {
    height: '40%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  }
});
