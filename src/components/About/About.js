import React from 'react';
import Weather from '..//Weather/Weather';
import './About.css';

const About = ({data, changed, handleKeyPress, errorLanguage, clicked, errorSearch, weatherData}) => {
    return(
        <div className='About'>
            <div className='Static'>
                <h1>Weather widget</h1>
                <p>Check the weather <br/> in your city</p>
            </div>
            <div className='Main'>
                <input 
                    type='text' 
                    value={data} 
                    placeholder='Enter location' 
                    onChange={changed} 
                    onKeyPress={handleKeyPress}
                />
                <h6 className="Red">
                    {errorLanguage}
                </h6>
                <button 
                    onClick={clicked}
                >
                    Search
                </button>
                <h6 className="Red">
                    {errorSearch}
                </h6>
                { 
                    weatherData && <Weather weather={weatherData}/>
                }
            </div>
        </div>
    );
};

export default About;
 