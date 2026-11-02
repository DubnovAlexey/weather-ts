import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {forecast_url, geocoding_url} from "../utils/constants.ts";
import type {WeatherInfo} from "../utils/types";

const Data = () => {
  const [weatherInfo, setWeatherInfo] = useState<Partial<WeatherInfo>>({});
  const [message, setMessage] = useState('Enter city name');

  const getWeather = async (city: string) => {
    if (!city.trim()) return;
    setMessage('Loading...');
    try {
      // 1. City name -> coordinates
      const geo = await fetch(`${geocoding_url}?name=${encodeURIComponent(city.trim())}&count=1&language=en&format=json`)
        .then(res => res.json());
      const place = geo.results?.[0];
      if (!place) throw new Error(`City not found: ${city}`);

      // 2. Coordinates -> current weather and today's sunset
      const params = new URLSearchParams({
        latitude: String(place.latitude),
        longitude: String(place.longitude),
        current: 'temperature_2m,pressure_msl',
        daily: 'sunset',
        timeformat: 'unixtime',
        timezone: 'auto',
        forecast_days: '1'
      });
      const res = await fetch(`${forecast_url}?${params}`);
      if (!res.ok) throw new Error(`Weather service error: ${res.status}`);
      const data = await res.json();

      setWeatherInfo({
        country: place.country ?? place.country_code,
        city: place.name,
        temp: data.current.temperature_2m,
        pressure: data.current.pressure_msl,
        sunset: new Date(data.daily.sunset[0] * 1000),
        timezone: data.timezone
      });
      setMessage('');
    } catch (e) {
      console.log(e);
      setMessage('Enter correct city name');
      setWeatherInfo({});
    }
  }

  return (
    <div>
      <Form getWeather={getWeather}/>
      <Weather weather={weatherInfo} message={message}/>
    </div>
  )
}

export default Data;
