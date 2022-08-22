import React from "react";

const SingleDayWeather = (props) => {
  // console.log(props.weather);

  return (
    <div>
      <p>{props.weather.dayName}</p>
      <p>{props.weather.dayofMonth}</p>
      <p>{props.weather.month}</p>
      <p>{props.weather.visibility}</p>
    </div>
  );
};

export default SingleDayWeather;
