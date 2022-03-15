import {View, Text} from 'react-native';
import React from 'react';
import TabRoutes from './RouteTab';
export default function Mainnav(Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={TabRoutes} />
    </>
  );
}
