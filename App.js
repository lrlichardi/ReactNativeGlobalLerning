import React from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Register} from './src/screens/register';
import {Login} from './src/screens/login';
import {Home} from './src/screens/home';
import {Elipse} from './src/components/elipse';
/**
 *
 * @returns
 * 
 * 
      ESTAS FUNCIONAN POR SEPARADO
      
      <Login />
      <Register />
      <Home />


      ESTA ESTRUCTURA NO PUDE HACER QUE FUNCIONE

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>




      */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <Elipse />

        <Register />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height: '100%',
  },
});

export default App;
