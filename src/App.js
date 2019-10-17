import React, { useState, useEffect } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import Weather from './containers/Weather/Weather';
import Details from './containers/Details/Details';
import { handleGeolocationPermission } from './services/geolocation';
import { getWeatherByGeolocation } from './services/weatherAPI';
import WeatherContext from './containers/WeatherContext/WeatherContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coord, setCoord] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (!coord) {
      console.log('epa');
      handleGeolocationPermission(setCoord);
    }
  }, [coord]);

  useEffect(() => {
    if (coord && !weather) {
      console.log('epa');
      setLoading(true);
      getWeatherByGeolocation(coord.coords.latitude, coord.coords.longitude)
        .then((res) => {
          console.log('epa');
          setWeather(res);
          setLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [coord, weather]);
  return (
    <WeatherContext.Provider
      value={{
        locationName: weather ? weather.name : '',
        main: weather ? weather.main : {},
        description: weather ? weather.weather.main : "Cloudy",
        date: weather ? weather.dt : 1571273721,
        clouds: weather ? weather.clouds : {},
        visibility: weather ? weather.visibility : 0,
        winds: weather ? weather.wind : {},
        reset: () => setWeather(null),
        loading,
      }}
    >
      <DefaultLayout>
        <Weather />
        <Details />
      </DefaultLayout>
    </WeatherContext.Provider>
  );
}

export default App;
