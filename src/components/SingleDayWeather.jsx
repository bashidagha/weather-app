import React from "react";
import { photoOfWeather } from "../utils/Utils";
import './singledayweather.css'

const SingleDayWeather = (props) => {


  console.log(props.weathers)

  const template = props.weathers.map((day) => {
    return {
      dayName:
        day.dayName === "Tomorrow" ? "Tomorrow" : day.dayName.slice(0, 3),
      dayOfMonth: day.dayofMonth,
      month: day.month.slice(0, 3),
      photo: photoOfWeather(day.weather[0].id),
      tempmin: (day.main.temp_min - 273.15).toFixed(0),
      tempmax: (day.main.temp_max - 273.15).toFixed(0),
    };
  });

  console.log(template);

  // const monthPlusDay = `${a.day.slice(0, 3)},${a.dayOfMonth} ${a.month.slice(
  //   0,
  //   3
  // )}`;

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
