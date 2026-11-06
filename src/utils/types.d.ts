export interface WeatherInfo {
  city: string;
  country: string;
  temp: number;
  pressure: number;
  sunset: Date | null;
  timezone: string; // the city's time zone, to show the sunset in local time
}
