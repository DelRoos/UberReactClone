/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({originLoc, destinationLoc}) => {


    const origin = {
        latitude: originLoc.details.geometry.location.lat,
        longitude: originLoc.details.geometry.location.lng,
    };

    const destination = {
        latitude: destinationLoc.details.geometry.location.lat,
        longitude: destinationLoc.details.geometry.location.lng,
    };

    const GOOGLE_MAPS_APIKEY = 'AIzaSyAyTzROc_wrO-16oCrvH07HLDXPMT9jigI';

    return (
        <MapView
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: originLoc.details.geometry.location.lat,
                longitude: originLoc.details.geometry.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
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
