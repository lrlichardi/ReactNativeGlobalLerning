import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

export const Inputs = ({text, placeholder, onChangeText , typeInput}) => {
  let type = false;
  if (typeInput === 'password') {
    type = true;
  }
 
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      placeholderTextColor="black"
      secureTextEntry={type}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 30,
    width: '85%',
  },
});