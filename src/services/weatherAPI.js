import {
  API_URL, WEATHER_ROUTE, APP_ID,
} from '../config/api';

export async function getWeatherByGeolocation(lat, long) {
  console.log('entrou', lat, long);

  const response = await fetch(`${API_URL}${WEATHER_ROUTE}?lat=${lat}&lon=${long}&appid=${APP_ID}`);
  const result = await response.json();
  return result;
}