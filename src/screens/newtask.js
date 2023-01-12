import React, {useState} from 'react';
import {View, StyleSheet, Switch, Text} from 'react-native';
import {Inputs} from '../components/Input';
import {Elipse} from '../components/elipse';
import {Button} from '../components/Button';
import {addtask} from '../function/addtask';

export const Newtask = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [description, setDescription] = useState('');
  //--------------
  //falta el token 
  //--------------

  return (
    <View style={styles.container}>
      <Elipse />
      <View style={styles.containerTask}>
        <Text style={styles.title}>Crear Tarea Nueva</Text>
        <Inputs
          onChangeText={text => setDescription(text)}
          placeholder={'Ingrese la tarea'}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#4dff4d' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.containerButton}>
        <Button title={'Crear tarea'} action={() => addtask(description, )} />
        <Button title={'Retornar'} action />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerTask: {
    height: '55%',
    paddingTop: 80,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerButton: {
    height: '45%',
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
