import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Forecast from "./Forecast";

const Details = () => {
  const params = useParams();
  const { name } = params;
  const [city, setCity] = useState(name);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b29467b8c7b2c03568265ab5e698f7e2`
      )
      .then((response) => {
        console.log(response, "forecast");
        setForecast(response.data);
      })
      .catch((error) => {
        alert("City forecast not found...!!");
      });
  }, [city]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b29467b8c7b2c03568265ab5e698f7e2`
      )
      .then((response) => {
        console.log(response, "weather");
      })
      .catch((error) => {
        alert("City weather not found...!!");
      });
  }, [city]);

  return (
    <div style={{ marginTop: "80px" }}>
      <section>
        <input
          placeholder="Type City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </section>
      <h1>{name}</h1>
      <Forecast forecastData={forecast} />
    </div>
  );
};

export default Details;
