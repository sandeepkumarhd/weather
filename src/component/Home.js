import React, { useEffect, useState } from "react";
import { City } from "country-state-city";
import styles from "../styles/Home.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Pagination } from "antd";
import illustration from "../illustration.svg";
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
      <div className={styles.home}>
        <div>
          {" "}
          <h1>Today's Top Cities</h1>
          <label>Today's Top Cities</label>
        </div>
        <div>
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <section className={styles.table}>
        <div>
          <span>City Name</span>
          <span className={styles.IsMobile}>Latitude</span>
          <span className={styles.IsMobile}>Longitude</span>
          <span>State Code</span>
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
                <label className={styles.IsMobile}>{ele?.latitude}</label>
                <label className={styles.IsMobile}>{ele?.longitude}</label>
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
