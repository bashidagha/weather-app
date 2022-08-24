import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCityCurrentWeather,
  searchSimilarCity,
} from "../store/city-actions";
import { cityActions } from "../store/city-slice";
import styles from "./searchcity.module.css";
import store from "../store";
import { useSelector } from "react-redux";

const SearchCity = () => {
  const dispatch = useDispatch();

  const searchCityRef = useRef();

  const searchQueryList = useSelector((state) => state.city.similarCity);

  const searchCityHandler = (event) => {
    event.preventDefault();
    dispatch(searchSimilarCity(searchCityRef.current.value));
  };

  const changeCityHandler = (name) => {
    dispatch(cityActions.changeCity(name));
    dispatch(cityActions.hideCitySearch())
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
            onClick={() => changeCityHandler(s.city)}
          >
            {s.format}
            <span class="material-icons">chevron_right</span>
          </div>
        ))}
    </div>
  );
};

export default SearchCity;
