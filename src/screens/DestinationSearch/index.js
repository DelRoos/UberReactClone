/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = props => {
  // const [fromText, setFromText] = useState('');
  // const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null)
  const [destinationPlace, setDestinationPlace] = useState(null)

  useEffect(() => {
    console.warn('Effect is called');
    if (originPlace && destinationPlace) {
      console.warn('redirect to result');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder='Where from ?'
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
            language: 'en',
          }}
        />


        <GooglePlacesAutocomplete
          placeholder='Where To ?'
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI',
            language: 'en',
          }}

        />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
