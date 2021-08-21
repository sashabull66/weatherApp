import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function Loading() {
    return (
        <View style={loadingStyles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#fdf6aa'/>
            <Text style={loadingStyles.text}>Получение данных о погоде...</Text>
        </View>
    )
}


const loadingStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 100,
        paddingHorizontal: 30,
        backgroundColor:'#fdf6aa'
    },
    text: {
        fontSize: 30,
        color: '#2c2c2c'
    }
})
