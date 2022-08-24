import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCityCurrentWeather,
  searchSimilarCity,
} from "../store/city-actions";
import { cityActions } from "../store/city-slice";
import styles from "./searchcity.module.css";
import store from "../store";

const SearchCity = () => {
  const dispatch = useDispatch();

  const searchCityRef = useRef();

  const state = store.getState();
  const searchQueryList = state.city.similarCity;

  const searchCityHandler = (event) => {
    event.preventDefault();
    dispatch(searchSimilarCity(searchCityRef.current.value));
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

      {searchQueryList && searchQueryList.map((s) => <div>{s.format}</div>)}
    </div>
  );
};

export default SearchCity;
