/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={
                    (props) => (
                        <CustomDrawer {...props} />
                    )
                }
            >

                <Drawer.Screen name="Home" component={HomeNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
