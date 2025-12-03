import type {WeatherInfo} from "../utils/types";

interface Props {
  message: string;
  weather: Partial<WeatherInfo>
}

const Weather = ({weather, message}: Props) => {
  if (message) {
    return (
      <div className={'error'}>{message}</div>
    )
  }
  return (
    <div className={'infoWeath'}>
      <p>Location: {weather.country}, {weather.city}</p>
      <p>Temp: {weather.temp}</p>
      <p>Pressure: {weather.pressure}</p>
      <p>Sunset: {weather.sunset.toLocaleTimeString()}</p>
    </div>
  )
}

export default Weather;