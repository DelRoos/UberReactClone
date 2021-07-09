/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';

const DestinationSearch = props => {

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      console.warn('hello');
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
    console.warn('Effect is called');
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);


  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };


  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder='Where from ?'
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteRows,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
            language: 'en',
          }}
          currentLocation={true}
          currentLocationLabel='Current location'
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />


        <GooglePlacesAutocomplete
          placeholder='Where To ?'
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteRows,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
            language: 'en',
          }}

          renderRow={(data => <PlaceRow data={data} />)}
        />

          <View style={styles.circle} />
          <View style={styles.line} />
          <View style={styles.square}  />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
