/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';


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
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
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
          renderRow={(data => <PlaceRow data={data} />)}
        />


        <GooglePlacesAutocomplete
          placeholder='Where To ?'
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
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
