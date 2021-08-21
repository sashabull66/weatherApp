import React from "react";
import propTypes from 'prop-types';
import {StyleSheet, Text, View, Stat, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {iconName:'weather-lightning', gradient:['#000046', '#1CB5E0']},
    Drizzle: {iconName:'weather-partly-rainy', gradient:['#0082c8', '#667db6']},
    Rain: {iconName:'weather-rainy', gradient:['#0575E6', '#00F260']},
    Snow: {iconName:'weather-snowy', gradient:['#E6DADA', '#274046']},
    Mist: {iconName:'weather-fog', gradient:['#215f00', '#e4e4d9']},
    Clear: {iconName:'weather-sunny', gradient:['#2B32B2', '#1488CC']},
    Clouds: {iconName:'weather-cloudy', gradient:['#076585', '#fff']},
    Smoke: {iconName:'weather-fog', gradient:['#005AA7', '#FFFDE4']},
    Haze: {iconName:'weather-fog', gradient:['#5C258D', '#4389A2']},
    Dust: {iconName:'weather-windy-variant', gradient:['#fe8c00', '#f83600']},
    Fog: {iconName:'weather-fog', gradient:['#B993D6', '#8CA6DB']},
    Sand: {iconName:'weather-sunny-alert', gradient:['#3E5151', '#DECBA4']},
    Ash: {iconName:'weather-sunny-alert', gradient:['#606c88', '#3f4c6b']},
    Squall: {iconName:'weather-hurricane', gradient:['#fc00ff', '#00dbde']},
    Tornado: {iconName:'weather-tornado', gradient:['#f857a6', '#ff5858']},
}

export default function Weather({temp, condition}) {
    return (
        /*<View style={styles.container}>*/
        /*backgroundColor='#4c669f' for android*/
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={weatherOptions[condition].gradient[0]}/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white"/>
                <Text style={styles.temp}>{temp + '°'}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text></Text>
                <Text></Text>
            </View>
        </LinearGradient>
        /*</View>*/
    )
}

Weather.propTypes = { // .isRequired обязателен
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Clear", "Clouds", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 45,
        color: 'white'


    }
})