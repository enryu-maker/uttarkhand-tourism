import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Mainnav} from './Mainnav';
import Authnav from './Authnav';
// import { useSelector } from 'react-redux';


const Stack = createStackNavigator();


export default function Routes() {
    // const [Route,setRoute] = React.useState(null)
    async function retrieveData() {
        // await AsyncStorage.clear()
        return (await AsyncStorage.getItem('auth'))
      };
      console.log(retrieveData())
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                {retrieveData() ? Authnav(Stack):Mainnav(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}