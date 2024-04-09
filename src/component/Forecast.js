import React from "react";
import styles from "../styles/Forecast.module.css";

const Forecast = ({ forecastData }) => {
  console.log(forecastData.list);
  return (
    <div className={styles.forecastContainer}>
      <h2>5-Day Weather Forecast</h2>
      <div className={styles.forecastList}>
        {forecastData?.list?.length > 0
          ? forecastData?.list?.splice(0, 5)?.map((forecast, index) => (
              <div key={index} className={styles.forecastItem}>
                <div className={styles.date}>{forecast.dt_txt}</div>
                <div className={styles.weatherInfo}>
                  <div className={styles.temperature}>
                    {forecast.main.temp}°C
                  </div>
                  <div className={styles.description}>
                    {forecast.weather[0].description}
                  </div>
                  <div className={styles.humidity}>
                    Humidity: {forecast.main.humidity}%
                  </div>
                </div>
              </div>
            ))
          : <label className={styles.error}>No data found</label>}
      </div>
    </div>
  );
};

export default Forecast;
