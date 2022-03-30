import {View, Text} from 'react-native';
import React from 'react';
import TabRoutes from './RouteTab';
 const Mainnav =(Stack)=>{
  return (
    <>
      <Stack.Screen name="Home" component={TabRoutes} />
    </>
  );
}
export default Mainnav;
