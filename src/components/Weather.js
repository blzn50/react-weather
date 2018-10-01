import React from 'react';

const Weather = ({ data }) => (
  <div className="weather_info">
    {data.city &&
      data.country && (
        <p className="weather">
          Location:{' '}
          <span className="weather_elem">
            {data.city}, {data.country}
          </span>
        </p>
      )}
    {data.temperature && (
      <p className="weather">
        Temperature: <span className="weather_elem">{data.temperature} °C</span>
      </p>
    )}
    {data.humidity && (
      <p className="weather">
        Humidity: <span className="weather_elem">{data.humidity}%</span>
      </p>
    )}
    {data.description && (
      <p className="weather">
        Condition: <span className="weather_elem">{data.description}</span>
      </p>
    )}
    {data.error && <p className="weather_error">{data.error}</p>}
  </div>
);

export default Weather;
