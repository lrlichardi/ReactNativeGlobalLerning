import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './src/screens/home';
import login from './src/screens/login';
import register from './src/screens/register';


const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={home}/>
                <Stack.Screen name='Login' component={login} />
                <Stack.Screen name='Register' component={register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;