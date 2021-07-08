/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import HomeSearch from './src/components/HomeSearch/index';
import DestinationSearch from './src/screens/DestinationSearch/index';
import SearchResults from './src/screens/SearchResults/index';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar />

      {/* <HomeScreen /> */}

      {/* <HomeSearch /> */}

      {/* <DestinationSearch /> */}

      <SearchResults />
    </View>
  );
};

export default App;
