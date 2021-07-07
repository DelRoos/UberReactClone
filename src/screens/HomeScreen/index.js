import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';

const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
    </View>
  );
};

export default HomeScreen;
