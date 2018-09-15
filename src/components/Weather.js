import React from 'react';

const Weather = ({ data }) => (
  <div className="weather_info">
    {data.city &&
      data.country && (
        <p>
          Location: {data.city}, {data.country}
        </p>
      )}
    {data.temperature && <p>Temperature: {data.temperature}</p>}
    {data.humidity && <p>Humidity: {data.humidity}</p>}
    {data.description && <p>Condition: {data.description}</p>}
    {data.error && <p>{data.error}</p>}
  </div>
);

export default Weather;
