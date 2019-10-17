import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import WeatherLayout from '../../components/Weather/WeatherLayout';
import WeatherContext from '../WeatherContext/WeatherContext';
import Text from '../../components/Text/Text';

const Details = () => {
  const {
    loading, clouds, main,
    visibility, winds,
  } = useContext(WeatherContext);

  return (
    <WeatherLayout>
      <Card loading={loading}>
        <div>
          <Text>Precipitation </Text>
          <Text>{clouds.all}%</Text>
        </div>
        <div>
          <Text>Humidity </Text>
          <Text>{main.humidity}%</Text>
        </div>
      </Card>
      <Card loading={loading}>
        {visibility && (
          <div>
            <Text>Visibility </Text>
            <Text>{visibility}</Text>
          </div>
        )}
        {winds && (
          <div>
            <Text>Winds </Text>
            <Text>{winds.speed}m/s</Text>
          </div>
        )}
      </Card>
    </WeatherLayout>
  );
};

export default Details;
