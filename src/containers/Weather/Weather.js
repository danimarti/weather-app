import React, { useContext } from 'react';
import Text from '../../components/Text/Text';
import WeatherLayout from '../../components/Weather/WeatherLayout';
import WeatherContext from '../WeatherContext/WeatherContext';
import { convertToCelsius } from '../../services/temperatures';

const Weather = () => {
  const {
    loading, locationName,
    main, description,
    reset,
  } = useContext(WeatherContext);

  return (
    <WeatherLayout>
      <Text loading={loading} fontSize={18} fontWeight={600}>
        <span role="img" aria-label="Global">🌐</span>
        {locationName} District
      </Text>
      <Text loading={loading} fontWeight={300}>{new Date().toLocaleString()}</Text>
      <Text loading={loading} fontSize={84} fontWeight={300}>
        <span role="img" aria-label="Cloud">☁</span>
        {convertToCelsius(main.temp)}°
      </Text>
      <Text loading={loading} fontWeight={300}>{`${convertToCelsius(main.temp_max)}° / ${convertToCelsius(main.temp_min)}°`}</Text>
      <Text loading={loading} fontWeight={300}>{description}</Text>
      <Text onClick={reset} loading={loading} fontSize={40} fontWeight={300}>
        <span role="img" aria-label="Refresh">🔄</span>
      </Text>
    </WeatherLayout>
  );
};

export default Weather;
