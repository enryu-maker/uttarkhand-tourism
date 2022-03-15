/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './Screen/Auth/Login';
import {Signup} from './Screen/Auth/Signup';
import { Forget } from './Screen/Auth/Forget';
import { COLORS } from './Theme/theme';
const Stack = createStackNavigator();


const App=() => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ headerShown: false}}
          initialRouteName={'Login'}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Forget" component={Forget} />

  </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
