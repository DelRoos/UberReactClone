/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Pressable } from 'react-native';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: '#212121', paddind: 15}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                    <View style={{
                        backgroundColor: '#cacaca',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        margin: 10,
                        marginBottom: 0,
                    }}/>
                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Vadim Savin</Text>
                        <Text style={{color: 'lightgrey'}}>5.00 *</Text>
                    </View>
                </View>
                
                
                
                
                <View style={{
                        borderBottomWidth: 1, 
                        borderBottomColor: '#919191', 
                        borderTopWidth: 1,
                        borderTopColor: '#919191',
                        paddingVertical: 5,
                        marginVertical: 10,
                }}>
                    <Pressable onPress={() => {console.warn('make monkey driving')}}>
                        <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
                    </Pressable>
                </View>

                <Pressable onPress={() => {console.warn('make monkey driving')}}>
                    <Text style={{color: '#ddd', paddingVertical: 5}}>Do more with your account</Text>
                </Pressable>

                <Pressable onPress={() => {console.warn('make monkey driving')}}>
                    <Text style={{color: 'white', paddingVertical: 5}}>Make money driving</Text>
                </Pressable>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
