import React, { useEffect, useState } from "react";
import { City } from "country-state-city";
import styles from "../styles/Home.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Pagination } from "antd";
const Home = () => {
  const [city, setCity] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    setCity(City.getCitiesOfCountry("IN"));
  }, []);
  const navigateToDetails = (cityName) => {
    navigate({ pathname: `/details/${cityName}` }, "_blank");
  };
  const onChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCities = city.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <section className={styles.table}>
        <div>
          <span>City Name</span>
          <span>latitude</span>
          <span>longitude</span>
          <span>stateCode</span>
        </div>

        {city.length === 0 ? (
          <p>Loding citys...</p>
        ) : (
          displayedCities.map((ele, index) => {
            return (
              <div key={index}>
                <label onClick={() => navigateToDetails(ele?.name)}>
                  {ele?.name}
                </label>
                <label>{ele?.latitude}</label>
                <label>{ele?.longitude}</label>
                <label>{ele?.stateCode}</label>
              </div>
            );
          })
        )}
        <main className={styles.pagination}>
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={city.length}
            onChange={onChange}
          />
        </main>
      </section>
    </div>
  );
};
export default Home;
