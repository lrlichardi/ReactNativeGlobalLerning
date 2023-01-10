import React from 'react';
import elipse from '../assets/elipse.png';
import {Image, StyleSheet} from 'react-native';

export const Elipse = () => {
  return <Image source={elipse} style={styles.elipse} />;
};

const styles = StyleSheet.create({
  elipse: {
    position: 'absolute',
    top: -90,
    left: -100,
  },
});
