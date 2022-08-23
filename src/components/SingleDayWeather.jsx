import React from "react";
import { photoOfWeather } from "../utils/Utils";
import "./singledayweather.css";

const SingleDayWeather = (props) => {
  const template = props.weathers.map((day) => {
    return {
      dayName:
        day.dayName === "Tomorrow" ? "Tomorrow" : day.dayName.slice(0, 3),
      dayOfMonth: day.dayofMonth,
      month: day.month.slice(0, 3),
      photo: photoOfWeather(day.weather.code),
      tempmin: Math.round(day.min_temp),
      tempmax: Math.round(day.max_temp),
    };
  });

  return (
    <div className="singles">
      {template.map((day) => (
        <div className="single__item">
          <p>{day.dayName}</p>
          <img src={day.photo} alt="photo"></img>
          <div>
            <span>{day.tempmax}</span>
            &nbsp;&nbsp;&nbsp;
            <span>{day.tempmin}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleDayWeather;
