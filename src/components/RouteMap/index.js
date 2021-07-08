/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = props => {

    const origin = {
        latitude: 28.460627,
        longitude: -16.263045,
    };

    const destination = {
        latitude: 28.454812,
        longitude:-16.258658,
    };

    const GOOGLE_MAPS_APIKEY = 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI';

    return (
        <MapView
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >

            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor={"black"}
            />
            <Marker
                coordinate={origin}
                title={"Origin"}
            />
            <Marker
                coordinate={destination}
                title={"Destination"}
            />

        </MapView>
    );
  };

export default RouteMap;
