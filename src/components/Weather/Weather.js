import React, {Component} from 'react';
import './Weather.css';

class Weather extends Component {
    render() {
        const {weather} = this.props;
        return (
            <div className="Weather">
                <h2>Weather in the {weather.name}</h2>
                <p><img src="https://img.icons8.com/ultraviolet/40/000000/temperature.png" alt="Current"></img>Current temperature: {Math.floor((weather.main.temp - 32)*5/9)}°C</p>
                <p><img src="https://img.icons8.com/ultraviolet/40/000000/pressure.png" alt="Pressure"></img>Pressure: {weather.main.pressure} hpa</p>
                <p><img src="https://img.icons8.com/ultraviolet/40/000000/humidity.png" alt="Humidity"></img>Humidity: {weather.main.humidity} %</p>
                <p><img src="https://img.icons8.com/ultraviolet/40/000000/windy-weather.png" alt="Wind"></img>Wind: {weather.wind.speed}  m/s</p>
            </div> 
        );
    }
}

export default Weather;