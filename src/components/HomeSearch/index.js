/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import { Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const HomeSearch = (props) => {
    const navigtion = useNavigation();

    const goToSearch = () => {
        navigtion.navigate('DestinationSearch');
    };

    return (
        <View >
            {/* Input box */}
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Where to ?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </Pressable>
            {/* previous destination */}

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
                </View>

                <Text style={styles.destinationText}> Spin Nightclub</Text>
            </View>
            {/* previous destination */}

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name={'home'} size={16} color={'#fff'} />
                </View>

                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    );
};

export default HomeSearch;
