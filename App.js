import React from 'react';
import * as Location from 'expo-location'
import {Alert} from 'react-native';
import Loading from "./components/Loading/Loading.js";
import axios from 'axios'
import Weather from "./components/Weather/Weather.js";

const API_KEY = '2002e58b1b63a441b83a6b24a53cf29a';

export default class App extends React.Component {
    state = {
        isLoading: true
    }

    getWeather = async (latitude, longitude) => {
        const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        this.setState({
            isLoading: false,
            temp,
            condition: weather[0].main
        })
    }

    getLocation = async () => {
        try {
            // throw Error() // тест alert ошибки
            const askUser = await Location.requestForegroundPermissionsAsync() // спросить пользователя разрешение на использование геопозиции
            console.log(askUser)
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync() // определить координаты
            console.log(latitude, longitude)
            // coords.latitude - широта
            // coords.longitude - долгота
            this.getWeather(latitude, longitude)

        } catch (error) {
            console.log(error)
            Alert.alert('Не могу определить местоположение', 'Это печально :(')
        }
    }


    componentDidMount() {
        this.getLocation()
    }

    render() {
        const {isLoading, temp, condition} = this.state; // достать деструктуризацией переменную из state
        return (
            isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
        );
    }
}