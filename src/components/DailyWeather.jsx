import React from "react";
import { useDispatch } from "react-redux";
import store from "../store/index";
import { photoOfWeather } from "../utils/Utils";
import styles from "./dailyweather.module.css";
import { cityActions } from "../store/city-slice";
import { useSelector } from "react-redux";

const DailyWeather = (props) => {
  const mainPhoto = photoOfWeather(props.weather.weather.icon);

  const degree = props.weather.temp;

  const cityName = useSelector((state)=>state.city.citySpec.name)
  const a = useSelector((state)=>state.city.currentDate)


  const monthPlusDay = `${a.day.slice(0, 3)},${a.dayOfMonth} ${a.month.slice(
    0,
    3
  )}`;

  const dispatch = useDispatch();


  return (
    <div className={styles.current__weather}>

      <button className={styles.btn__search} onClick={()=> dispatch(cityActions.showCitySearch())}>Search for places</button>

      <div
        className={
          props.weather.weather.code === 800
            ? styles.current__bg
            : `${styles.current__bg} ${styles.current__bg__image}`
        }
      >
        <img src={mainPhoto} alt="main" className={styles.current__photo}></img>
      </div>
      <div className={styles.current__degree}>
        {degree.toFixed(0)}
        <span>&#8451;</span>
      </div>
      <div className={styles.current__condition}>
        {props.weather.weather.description}
      </div>

      <div className={styles.current__otherdata}>
        <p>Today&nbsp;&nbsp;&#8226;&nbsp;&nbsp;{monthPlusDay}</p>
        <p>
          <span className="material-icons">location_on</span>
          {cityName}
        </p>
      </div>
    </div>
  );
};

export default DailyWeather;
