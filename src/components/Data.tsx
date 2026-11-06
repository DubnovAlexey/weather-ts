// ФАЙЛ: Data.tsx. НАЗНАЧЕНИЕ: поиск погоды с отменой устаревшего запроса.
// РАЗДЕЛЫ: 1. Состояние и жизненный цикл; 2. Последний запрос и представление.
import Form from './Form.tsx';
import Weather from './Weather.tsx';
import {useEffect, useRef, useState} from 'react';
import {fetchWeather} from '../utils/weatherResponse.ts';
import type {WeatherInfo} from '../utils/types';

const Data = () => {
  const [weatherInfo, setWeatherInfo] = useState<Partial<WeatherInfo>>({});
  const [message, setMessage] = useState('Enter city name');
  const pending = useRef<AbortController | null>(null);
  useEffect(() => () => pending.current?.abort(), []);

  // НАЧАЛО ФУНКЦИИ getWeather
  const getWeather = async (city: string) => {
    if (!city.trim()) return;
    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    setMessage('Loading...');
    try {
      const weather = await fetchWeather(city, controller.signal);
      if (controller.signal.aborted || pending.current !== controller) return;
      setWeatherInfo(weather);
      setMessage('');
    } catch (error) {
      if (controller.signal.aborted || pending.current !== controller) return;
      setMessage(error instanceof Error && error.message !== 'Failed to fetch' ? error.message : 'Weather service is unavailable. Check your connection and try again.');
      setWeatherInfo({});
    }
  };
  // КОНЕЦ ФУНКЦИИ getWeather
  return <div><Form getWeather={getWeather}/><Weather weather={weatherInfo} message={message}/></div>;
};
export default Data;
