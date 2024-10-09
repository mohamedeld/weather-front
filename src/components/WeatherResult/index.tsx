
import React from 'react';
import { IWeather } from '../../types/weather';
import { GeoCoords, Main, WeatherContainer } from './StyledWeather';

interface IProps{
  weather:IWeather | null;
}

const WeatherResult = ({weather}:IProps) => {
  return (
    <><WeatherContainer>
      <img
              src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
              alt="weather status icon"
              loading='lazy'
              className="weather-icon"
            />
    
      <Main>
          <h4>{weather?.name}, {" "} {weather?.sys?.country}</h4>
      <p >
											Temperature: {" "}
											{weather?.main?.temp} °C
										</p>
										<p >
											Weather: {" "}
											{weather?.weather[0]?.description}
										</p>
                    <GeoCoords>
                      <p>Geo coords {" "} 
                          <span>[{weather?.coord?.lon},{weather?.coord?.lat}]</span>
                      </p>
                    </GeoCoords>
      </Main>
    </WeatherContainer>
    </>
  )
}

export default React.memo(WeatherResult);