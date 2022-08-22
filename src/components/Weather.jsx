import React from "react";
import { useSelector } from "react-redux";
import { Extract5DayWeather } from "../utils/Utils";
import DailyWeather from "./DailyWeather";
import SingleDayWeather from "./SingleDayWeather";

const Weather = () => {
  const data3HoursForecast = useSelector(
    (state) => state.city.cityForecastWeather
  );

  const currentWeather = useSelector(
    (state) => state.city.cityCurrentWeather
  );

  function WeatherForecastDays() {
    const showndata = Extract5DayWeather(data3HoursForecast);


    return (
      <>

        <DailyWeather weather={currentWeather}/>


        {showndata.map((weatherOfTheDay) => (
          <SingleDayWeather weather={weatherOfTheDay} key={weatherOfTheDay.dt} />
        ))}
      </>
    );
  }

  return <>{currentWeather && data3HoursForecast && <WeatherForecastDays />}</>;
};

export default Weather;
