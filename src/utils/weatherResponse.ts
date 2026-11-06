// ФАЙЛ: weatherResponse.ts. НАЗНАЧЕНИЕ: проверяемый контракт геокодера и прогноза.
// РАЗДЕЛЫ: 1. Разбор неизвестного JSON; 2. Отменяемый запрос погоды.
import {forecast_url, geocoding_url} from './constants.ts';
import {fetchJson} from './request.ts';
import type {WeatherInfo} from './types';
type Place = {latitude: number; longitude: number; name: string; country: string};
const record = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('The weather service returned invalid data.');
  return value as Record<string, unknown>;
};
// НАЧАЛО ФУНКЦИИ parsePlace
export function parsePlace(value: unknown): Place {
  const results = record(value).results;
  if (!Array.isArray(results) || results.length === 0) throw new Error('City not found. Check the name and try again.');
  const place = record(results[0]);
  if (typeof place.name !== 'string' || typeof place.latitude !== 'number' || !Number.isFinite(place.latitude) ||
      Math.abs(place.latitude) > 90 || typeof place.longitude !== 'number' || !Number.isFinite(place.longitude) || Math.abs(place.longitude) > 180)
    throw new Error('The geocoding service returned invalid coordinates.');
  return {latitude:place.latitude,longitude:place.longitude,name:place.name,
    country:typeof place.country === 'string' ? place.country : typeof place.country_code === 'string' ? place.country_code : 'Unknown'};
}
// КОНЕЦ ФУНКЦИИ parsePlace
// НАЧАЛО ФУНКЦИИ parseForecast
export function parseForecast(value: unknown, place: Place): WeatherInfo {
  const data=record(value),current=record(data.current),daily=record(data.daily);
  if (typeof current.temperature_2m !== 'number' || !Number.isFinite(current.temperature_2m) ||
      typeof current.pressure_msl !== 'number' || !Number.isFinite(current.pressure_msl) ||
      !Array.isArray(daily.sunset) || (daily.sunset[0] !== null && (typeof daily.sunset[0] !== 'number' || !Number.isFinite(daily.sunset[0]))) || typeof data.timezone !== 'string')
    throw new Error('The weather service returned an incomplete forecast.');
  const sunset = daily.sunset[0] === null ? null : new Date(daily.sunset[0] * 1000);
  if (sunset !== null && !Number.isFinite(sunset.getTime())) throw new Error('The weather service returned an invalid sunset.');
  try { new Intl.DateTimeFormat('en', {timeZone:data.timezone}).format(sunset ?? new Date(0)); }
  catch { throw new Error('The weather service returned an invalid time zone.'); }
  return {city:place.name,country:place.country,temp:current.temperature_2m,pressure:current.pressure_msl,sunset,timezone:data.timezone};
}
// КОНЕЦ ФУНКЦИИ parseForecast
// НАЧАЛО ФУНКЦИИ fetchWeather
export async function fetchWeather(city: string, signal: AbortSignal, request: typeof fetch = fetch): Promise<WeatherInfo> {
  const geo = await fetchJson(`${geocoding_url}?name=${encodeURIComponent(city.trim())}&count=1&language=en&format=json`, signal, request);
  const place = parsePlace(geo);
  const params = new URLSearchParams({latitude:String(place.latitude),longitude:String(place.longitude),
    current:'temperature_2m,pressure_msl',daily:'sunset',timeformat:'unixtime',timezone:'auto',forecast_days:'1'});
  const data = await fetchJson(`${forecast_url}?${params}`, signal, request);
  return parseForecast(data, place);
}
// КОНЕЦ ФУНКЦИИ fetchWeather
