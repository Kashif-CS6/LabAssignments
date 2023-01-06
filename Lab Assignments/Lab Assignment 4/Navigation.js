import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View,Text} from 'react-native';
import Loginform from './Loginform';
import Project from './Project';
import Signup2 from './Signup2';
import Profile from './Profile';
export default function navigation () {
    const Stack=createNativeStackNavigator();
    return (
        <NavigationContainer>
<Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='Login' component={Loginform}/>
    <Stack.Screen name='Project' component={Signup2}/>
    <Stack.Screen name='Profile' component={Profile}/>
</Stack.Navigator>
      </NavigationContainer>
    )

}


