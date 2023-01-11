import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const Button = ({title, action}) => {
  const [loadingData, setLoadingData] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={action}>
        {loadingData ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <Text style={[styles.title]}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    marginHorizontal: 0,
    backgroundColor: '#2196F3',
    borderRadius: 20,
  },
  button: {
    width: 350,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
