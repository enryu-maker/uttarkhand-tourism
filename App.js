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
import Routes from './Screen/Navigations/Route';
import { Provider } from 'react-redux';


const App=() => {
  return (
<View style={{flex:1}}>
<Routes/>

</View>
    
    
  );
};

export default App;
