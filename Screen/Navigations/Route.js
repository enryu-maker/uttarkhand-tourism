import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mainnav from './Mainnav';
import Authnav from './Authnav';
// import { useSelector } from 'react-redux';


const Stack = createStackNavigator();


export default function Routes() {
// const userData = useSelector((state)=> state.auth.userData)

// console.log("user data",userData)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                {Authnav(Stack)}
                {/* {!!userData && userData?.access_token ? Mainnav(Stack)
                    : Authnav(Stack)
                } */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}