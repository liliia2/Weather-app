import React, {Component} from 'react';
import About from '..//About/About';
import './All.css';

class All extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            inputfield: '',
            lastInputfield: '',
            weatherData: null,
            errorLanguage: '',
            errorSearch: '',
            otherState: 'some other value'
        }
    }

    city = (event) => {
        const inputfield = event.target.value;
        this.setState({inputfield: inputfield}); 

        if (inputfield.match(/[а-я]/gi)) {
            this.setState({errorLanguage: 'In english, please.'});
        }
        else if (inputfield.length === 0 || inputfield !== this.state.lastInputfield) {
            this.setState({errorLanguage: '', errorSearch: '', weatherData: null});
        }        
        else if (inputfield.length > 0 && inputfield.match(/\W/g) && !inputfield.match(/\-/g) && !inputfield.match(/\s/g)) {
            this.setState({errorLanguage: 'Please, use correct city name.'});
        }
        else if (inputfield.match(/\w/g) || inputfield.match(/\-/g) || inputfield.match(/\s/g)) {
            this.setState({errorLanguage: ''});
        }

    }

    getWeather = () => {
        if (this.state.inputfield.length > 0 && (this.state.lastInputfield !== this.state.inputfield || this.state.weatherData === null)) {
            this.setState({lastInputfield: this.state.inputfield});
            const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputfield}&appid=cfe8a317f05e5aa14660873cfabb6fd0&units=imperial`;

            return fetch(URL)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error(`${res.status}: ${res.statusText}`);
                })
                .then(json => {
                    this.setState({weatherData: json, errorLanguage: '', errorSearch: ''});
                })
                .catch(error => {
                    this.setState({weatherData: null, errorSearch: 'Error ' + error.message});
                });
        }
    }

    handleKeyPressed = (target) => {
        if (target.charCode === 13) {
            this.getWeather();
        }
    }

    render () {
        const { inputfield, weatherData, errorSearch, errorLanguage } = this.state;

        return (
            <div className="All">
                <About
                    data={inputfield}
                    changed={this.city}
                    handleKeyPress={this.handleKeyPressed}
                    errorLanguage={errorLanguage}
                    errorSearch={errorSearch}
                    clicked={this.getWeather}
                    weatherData={weatherData}
                />
            </div>
        );
    }
}

export default All;