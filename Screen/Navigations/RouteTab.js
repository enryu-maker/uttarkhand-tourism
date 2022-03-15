import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Home/Home';
import { LoadLoc } from '../Location/LoadLoc';
const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
        screenOptions={{ headerShown: false}}
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName="Home"
        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Places" component={LoadLoc} />
            <BottomTab.Screen name="home2" component={Home} />
            <BottomTab.Screen name="Places2" component={LoadLoc} />
            <BottomTab.Screen name="Places3" component={LoadLoc} />
        </BottomTab.Navigator>

    )
}

export default TabRoutes