import React from "react";
import store from "../store/index";
import { photoOfWeather } from "../utils/Utils";
import "./dailyweather.css";

const DailyWeather = (props) => {
  const mainPhoto = photoOfWeather(props.weather.weather.code);

  const degree = props.weather.temp;

  const state = store.getState();
  const cityName = state.city.name;
  const a = state.city.currentDate;

  const monthPlusDay = `${a.day.slice(0, 3)},${a.dayOfMonth} ${a.month.slice(
    0,
    3
  )}`;

  return (
    <div className="current__weather">
      <div className="current__bg">
        <img src={mainPhoto} alt="main" className="current__photo"></img>
      </div>
      <div className="current__degree">
        {degree.toFixed(0)}
        <span>&#8451;</span>
      </div>
      <div className="current__condition">{props.weather.weather.description}</div>

      <div className="current__otherdata">
        <p>Today&nbsp;&nbsp;&#8226;&nbsp;&nbsp;{monthPlusDay}</p>
        <p>
          <span class="material-icons">location_on</span>
          {cityName}
        </p>
      </div>
    </div>
  );
};

export default DailyWeather;
