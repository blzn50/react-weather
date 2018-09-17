import React from 'react';

const Weather = ({ data }) => (
  <div className="weather_info">
    {data.city && <hr />}
    {data.city &&
      data.country && (
        <p className="weather">
          Location: {data.city}, {data.country}
        </p>
      )}
    {data.temperature && (
      <p className="weather">Temperature: {data.temperature} °C</p>
    )}
    {data.humidity && <p className="weather">Humidity: {data.humidity}%</p>}
    {data.description && (
      <p className="weather">Condition: {data.description}</p>
    )}
    {data.error && <p className="weather_error">{data.error}</p>}
  </div>
);

export default Weather;
