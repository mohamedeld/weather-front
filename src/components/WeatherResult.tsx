
import { IWeather } from '../types/weather'

interface IProps{
  weather:IWeather | null;
}

const WeatherResult = ({weather}:IProps) => {
  return (
    <><div className='weather-container'>
      <img
              src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
    
      <main>
          <h4>{weather?.name}, {" "} {weather?.sys?.country}</h4>
      <p className="card-text">
											Temperature: {" "}
											{weather?.main?.temp} °C
										</p>
										<p className="card-text">
											Weather: {" "}
											{weather?.weather[0]?.description}
										</p>
                    <div className='geo-cords'>
                      <p>Geo coords {" "} 
                          <span>[{weather?.coord?.lon},{weather?.coord?.lat}]</span>
                      </p>
                    </div>
      </main>
    </div>
    </>
  )
}

export default WeatherResult