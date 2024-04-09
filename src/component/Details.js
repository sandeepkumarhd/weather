import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Forecast from "./Forecast";
import styles from "../styles/Details.module.css";
import Weather from "./Weather";
import { City } from "country-state-city";
import { ToastContainer, toast } from "react-toastify";
import { Flex, Spin } from "antd";

const Details = () => {
  const params = useParams();
  const { name } = params;
  const [city, setCity] = useState(name);
  const [Allcity, setAllcity] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const weatherFeatch = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b29467b8c7b2c03568265ab5e698f7e2`
      )
      .then((response) => {
        setWeather(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setWeather([]);
      });
  };

  const foreCastFeatch = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b29467b8c7b2c03568265ab5e698f7e2`
      )
      .then((response) => {
        setForecast(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setForecast([]);
        toast.warning("Please enter valid city name");
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setAllcity(City.getCitiesOfCountry("IN"));
    foreCastFeatch();
    weatherFeatch();
  }, []);

  return (
    <div className={styles.main}>
      <section>
        <input
          list="cityOptions"
          placeholder="Type City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <datalist id="cityOptions">
          {Allcity.map((ele, index) => {
            return <option key={index}>{ele?.name}</option>;
          })}
        </datalist>
        <button
          onClick={() => {
            foreCastFeatch();
            weatherFeatch();
          }}
        >
          Search
        </button>
      </section>
      <Flex>
        {IsLoading ? (
          <div className={styles.spinner}>
            <Spin size="large" />
          </div>
        ) : (
          <Weather weatherData={weather} />
        )}
      </Flex>
      <Flex>
        {IsLoading ? (
          <div className={styles.spinner}>
            <Spin size="large" />
          </div>
        ) : (
          <Forecast forecastData={forecast} />
        )}
      </Flex>

      <ToastContainer />
    </div>
  );
};

export default Details;
