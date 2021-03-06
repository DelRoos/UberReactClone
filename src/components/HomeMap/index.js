/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';


const HomeMap = props => {

  const getImage = (type) => {
    if (type === 'UberX') {
        return require('../../assets/image/top-UberX.png');
    }
    if (type === 'UberXL') {
        return require('../../assets/image/top-UberXL.png');
    }
    if (type === 'Comfort') {
        return require('../../assets/image/top-Comfort.png');
    }
  };

  return (
      <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: 28.456312,
            longitude: -16.252929,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
      >
        {cars.map((car) => (
            <Marker
                key={car.id}
                coordinate={{ latitude : car.latitude , longitude : car.longitude }}
            >
              <Image 
                style={{
                  width: 70, 
                  height: 70, 
                  resizeMode: 'contain',
                  transform: [{
                    rotate: `${car.heading}deg`,
                  }],
                }}
                source={getImage(car.type)}

              />
            </Marker>

        ))}

      </MapView>
  );
};

export default HomeMap;
