/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRows/index';
import typeData from '../../assets/data/types';

const UberTypes = () => {
    const confirm = () => {
        console.warn('confirm');
    };

    return (
        <View>
            {typeData.map((type) => (
                <UberTypeRow type={type} key={type.id}/>
            ))}

            <Pressable onPress={confirm} style={{
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;
