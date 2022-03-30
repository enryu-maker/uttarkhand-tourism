
import { View, Text } from 'react-native'
import React from 'react'
import { Login } from "../Auth/Login";
import { Signup } from "../Auth/Signup";
import { Forget } from '../Auth/Forget';
import Mainnav from './Mainnav';
export default function Authnav(Stack) {
  return (
    <>
    <Stack.Screen 
        name="Login"
        component={Login}
    />
    <Stack.Screen
        name="Signup"
        component={Signup}
    />
    <Stack.Screen
        name="ForgetPass"
        component={Forget}
    />
    <Stack.Screen
        name="Mainnav"
        component={Mainnav}
    />
</>
  )
}