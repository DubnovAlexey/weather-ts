import type {WeatherInfo} from "../utils/types";

interface Props {
  message: string;
  weather: Partial<WeatherInfo>
}

const Weather = ({weather, message}: Props) => {
  if (message) {
    return (
      <div className={'error'} role="status" aria-live="polite">{message}</div>
    )
  }
  return (
    <div className={'infoWeath'} aria-live="polite">
      <p>Location: {weather.country}, {weather.city}</p>
      <p>Temp: {weather.temp} °C</p>
      <p>Pressure: {weather.pressure} hPa</p>
      <p>Sunset: {weather.sunset?.toLocaleTimeString([], {timeZone: weather.timezone, hour: '2-digit', minute: '2-digit'}) ?? 'Not available today'} (local time)</p>
    </div>
  )
}

export default Weather;
