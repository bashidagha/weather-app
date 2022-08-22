import React from "react";
import { useSelector } from "react-redux";
import SingleDayWeather from "./SingleDayWeather";
import { Extract5DayWeather } from "./Utils";


const Weather = () => {

  const data3HoursForecast = useSelector((state) => state.city.cityForecastWeather);

  function WeatherForecastDays() {


    const showndata = Extract5DayWeather(data3HoursForecast)

    return (
      <>
        {showndata.data.map((dayWeather) => (


        
          <SingleDayWeather weather={dayWeather} key={dayWeather.dt}/>
        ))}
      </>
    );
  }

  return <>{data3HoursForecast && <WeatherForecastDays />}</>;
};

export default Weather;
