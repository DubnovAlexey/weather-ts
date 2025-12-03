import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.ts";

const Data = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [message, setMessage] = useState('Enter city name');

  const getWeather = (city: string) => {
    fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeatherInfo({
          country: data.sys.country,
          city: data.name,
          temp: data.main.temp,
          pressure: data.main.pressure,
          sunset: new Date(data.sys.sunset * 1000)
        });
        setMessage('');
      })
      .catch(e => {
        console.log(e);
        setMessage('Enter correct city name');
        setWeatherInfo({});
      })
  }

  return (
    <div>
      <Form getWeather={getWeather}/>
      <Weather weather={weatherInfo} message={message}/>
    </div>
  )
}

export default Data;