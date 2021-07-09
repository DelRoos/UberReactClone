/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, View, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react';
import RootNavigator from './src/Navigations/Root';

navigator.geolocation = require('@react-native-community/geolocation');


const App: () => React$Node = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber App location Permission',
          message:
            'Uber App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(()=>{
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <RootNavigator />
    </>
  );
};

export default App;
