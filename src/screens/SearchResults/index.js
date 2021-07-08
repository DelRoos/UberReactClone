/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import UberTypes from '../../components/UberTypes/index';

const SearchResults = () => {
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{display: 'flex', justifyContent: 'space-between'}}>

            <View style={{height: Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>

            <View style={{height: 600}}>
                <UberTypes />
            </View>

        </View>
    );
};

export default SearchResults;
