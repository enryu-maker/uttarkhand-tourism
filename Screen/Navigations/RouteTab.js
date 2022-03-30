import React from 'react';
import {Image, View, Text} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home} from '../Home/Home';
import {LoadLoc} from '../Location/LoadLoc';
import {IMAGE} from '../../Theme/images';
import {COLORS, FONTS, SIZES} from '../../Theme/theme';
const BottomTab = createBottomTabNavigator();

const TabRoutes = route => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? IMAGE.home : IMAGE.home;
          } else if (route.name === 'Places') {
            iconName = focused ? IMAGE.temple : IMAGE.temple;
          } else if (route.name === 'Setting') {
            iconName = focused ? IMAGE.setting : IMAGE.setting;
          }

          return (
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: focused ? COLORS.lightprimary : COLORS.primary,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 12,
              }}>
              <Image
                source={iconName}
                style={{
                  alignSelf: 'center',
                  height: 20,
                  width: 20,
                }}
              />
            </View>
          );
        },
        tabBarLabelStyle: {
          ...FONTS.h5,
        },
        tabBarStyle: {
          height: 72,
          borderTopLeftRadius: SIZES.base,
          borderTopRightRadius: SIZES.base,
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.lightprimary,
        tabBarInactiveTintColor: COLORS.black,
      })}>
      <BottomTab.Screen name="home" component={Home} />
      <BottomTab.Screen name="Places" component={LoadLoc} />
      <BottomTab.Screen name="Setting" component={LoadLoc}  />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
