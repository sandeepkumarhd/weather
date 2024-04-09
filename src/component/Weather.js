import React from "react";
import styles from "../styles/Weather.module.css";

const Weather = ({ weatherData }) => {
  const { name, main, weather, wind, clouds, sys } = weatherData;
  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  console.log(weatherData);
  return (
    <>
      <div className={styles.weatherContainer}>
        <h2>Today's Weather Forecast</h2>
        {name ? (
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}>
              Temperature: {kelvinToCelsius(main?.temp)}°C
            </div>
            <div className={styles.feelsLike}>
              Feels Like: {kelvinToCelsius(main?.feels_like)}°C
            </div>
            <div className={styles.description}>
              Description: {weather && weather[0]?.description}
            </div>
            <div className={styles.humidity}>Humidity: {main?.humidity}%</div>
            <div className={styles.pressure}>
              Pressure: {main?.pressure} hPa
            </div>
            <div className={styles.windSpeed}>
              Wind Speed: {wind?.speed} m/s
            </div>
            <div className={styles.clouds}>Cloudiness: {clouds?.all}%</div>
            <div className={styles.sunriseSunset}>
              Sunrise: {new Date(sys?.sunrise * 1000).toLocaleTimeString()} |
              Sunset: {new Date(sys?.sunset * 1000).toLocaleTimeString()}
            </div>
          </div>
        ) : (
          <label className={styles.error}>No data found</label>
        )}
      </div>
    </>
  );
};

export default Weather;
