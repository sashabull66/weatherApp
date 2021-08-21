import React from "react";
import propTypes from 'prop-types';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#000046', '#1CB5E0'],
        title: "Гроза",
        subtitle: "Прячься под кровать!"
    },
    Drizzle: {
        iconName: 'weather-partly-rainy',
        gradient: ['#0082c8', '#667db6'],
        title: "Морось",
        subtitle: "Мелкий, гадкий дождик. Лучше сиди дома!"
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#0575E6', '#00F260'],
        title: "Дождь",
        subtitle: "Не забудь зонт, иначе промокнешь!"
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#E6DADA', '#274046'],
        title: "Снег",
        subtitle: "Хо хо хо, го в снежки!"
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#215f00', '#e4e4d9'],
        title: "Туман",
        subtitle: "Осторожно за рулем! Очень плохая видимость на дороге!"
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#2B32B2', '#1488CC'],
        title: "Ясно",
        subtitle: "Ура!!! Солнышко вышло!"
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#076585', '#fff'],
        title: "Облачно",
        subtitle: "Сейчас не загоришь!"
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#005AA7', '#FFFDE4'],
        title: "Туман",
        subtitle: "Осторожно за рулем! Очень плохая видимость на дороге!"
    },
    Haze: {
        iconName: 'weather-fog',
        gradient: ['#5C258D', '#4389A2'],
        title: "Туман",
        subtitle: "Осторожно за рулем! Очень плохая видимость на дороге!"
    },
    Dust: {iconName: 'weather-windy-variant', gradient: ['#fe8c00', '#f83600'], title: "Пыльно", subtitle: ""},
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#B993D6', '#8CA6DB'],
        title: "Туман",
        subtitle: "Осторожно за рулем! Очень плохая видимость на дороге!"
    },
    Sand: {iconName: 'weather-sunny-alert', gradient: ['#3E5151', '#DECBA4'], title: "Песчаная буря", subtitle: ""},
    Ash: {iconName: 'weather-sunny-alert', gradient: ['#606c88', '#3f4c6b'], title: "Пепельная буря", subtitle: ""},
    Squall: {
        iconName: 'weather-hurricane',
        gradient: ['#fc00ff', '#00dbde'],
        title: "Шквальный ветер",
        subtitle: "Если есть подвал, то сиди там!!!"
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#f857a6', '#ff5858'],
        title: "Торнадо",
        subtitle: "Я даже не зная что тут сказать... Беги, уезжай куда подальше!!!"
    },
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})