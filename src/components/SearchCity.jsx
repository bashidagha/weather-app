import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { cityActions } from "../store/city-slice";
import styles from "./searchcity.module.css";

const SearchCity = () => {
  const dispatch = useDispatch();

  const searchCityRef = useRef();

  const searchCityHandler = (event) => {
    event.preventDefault();
    dispatch(cityActions.changeCity(searchCityRef.current.value));
    dispatch(cityActions.hideCitySearch());
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
        <input placeholder="search location" ref={searchCityRef} type="text" required></input>
        <button type="submit">Search</button>
        <span className="material-icons">search</span>
      </form>
    </div>
  );
};

export default SearchCity;
