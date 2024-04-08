import React from "react";
import styles from "../styles/Forecast.module.css";

const Forecast = ({ forecastData }) => {
  console.log(forecastData);
  return (
    <div className={styles.forecastContainer}>
      <h2>5-Day Weather Forecast</h2>
      <div className={styles.forecastList}>
        {forecastData.length > 0 &&
          forecastData.map((day, index) => (
            <div key={index} className={styles.forecastItem}>
              <span className={styles.day}>{day.day}</span>
              <img src={day.icon} alt="Weather Icon" className="weather-icon" />
              <span className={styles.temperature}>{day.temperature}°C</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
