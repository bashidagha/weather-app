import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCityCurrentWeather,
  fetchCityWeather,
  searchSimilarCity,
} from "../store/city-actions";
import { cityActions } from "../store/city-slice";
import styles from "./searchcity.module.css";
import store from "../store";
import { useSelector } from "react-redux";

const SearchCity = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const searchCityRef = useRef();

  const searchQueryList = useSelector((state) => state.city.similarCity);

  const searchCityHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(searchSimilarCity(searchCityRef.current.value));
  };

  const changeCityHandler = (citySpec) => {
    dispatch(cityActions.setCityCurrentWeather(null));
    dispatch(cityActions.setCityForecastWeather(null));
    dispatch(cityActions.setSimilarCity(null));
    dispatch(cityActions.changeCity(citySpec));
    dispatch(cityActions.hideCitySearch());
    dispatch(fetchCityCurrentWeather());
    dispatch(fetchCityWeather());
    setIsLoading(false);
  };

  return (
    <div className={styles.search} onSubmit={searchCityHandler}>
      <span
        className={`material-icons ${styles.btn__close}`}
        onClick={() => dispatch(cityActions.hideCitySearch())}
      >
        close
      </span>

      <form>
        <input
          placeholder="search location"
          ref={searchCityRef}
          type="text"
          required
        ></input>
        <button type="submit">Search</button>
        <span className="material-icons">search</span>
      </form>

      {searchQueryList &&
        searchQueryList.map((s) => (
          <div
            className={styles.search__item}
            key={s.lat}
            onClick={() =>
              changeCityHandler({ name: s.city, lat: s.lat, lon: s.lon })
            }
          >
            {s.format}
            <span className="material-icons">chevron_right</span>
          </div>
        ))}

      {!searchQueryList && isLoading && (
        <div className={styles.search__item}>Loading...</div>
      )}
    </div>
  );
};

export default SearchCity;
