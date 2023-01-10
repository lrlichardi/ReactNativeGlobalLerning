import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const TextLink = ({text, navegacion}) => {
  return (
    <Text style={styles.textlink} onPress={navegacion}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textlink: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
