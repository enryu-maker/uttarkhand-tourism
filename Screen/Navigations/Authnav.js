
import { View, Text } from 'react-native'
import React from 'react'
import { Login } from "../Auth/Login";
import { Signup } from "../Auth/Signup";

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
</>
  )
}