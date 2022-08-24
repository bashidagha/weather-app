import React from "react";
import { photoOfWeather } from "../utils/Utils";
import styles from "./forecast5dayweather.module.css";

const Forecast5DayWeather = (props) => {
  const template = props.weathers.map((day) => {
    return {
      dayName:
        day.dayName === "Tomorrow" ? "Tomorrow" : day.dayName.slice(0, 3),
      dayOfMonth: day.dayofMonth,
      month: day.month.slice(0, 3),
      photo: photoOfWeather(day.weather.icon),
      tempmin: Math.round(day.min_temp),
      tempmax: Math.round(day.max_temp),
    };
  });

  return (
    <div className={styles.singles}>
      {template.map((day) => (
        <div className={styles.single__item} key={day.dayName}>
          <p>
            {day.dayName === "Tomorrow"
              ? "Tomorrow"
              : `${day.dayName}, ${day.dayOfMonth} ${day.month}`}
          </p>

          <img src={day.photo} alt="photo"></img>
          <div>
            <span>{day.tempmax}&#8451;</span>
            &nbsp;&nbsp;&nbsp;
            <span className={styles.min_temp}>{day.tempmin}&#8451;</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast5DayWeather;
