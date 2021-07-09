/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/index';
import DestinationSearch from '../screens/DestinationSearch/index';
import SearchResults from '../screens/SearchResults/index';

const Stack = createStackNavigator();
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
            <Stack.Screen name={'SearchResults'} component={SearchResults} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
