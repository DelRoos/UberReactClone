/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>The safety and wellbeing of everyone who uses Uber is at the heart of what we do. We're continuing to expand our response to COVID-19 with new features for our users, support for those who earn on our platform, and partnerships and initiatives that serve our cities.</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    );
};

export default CovidMessage;
