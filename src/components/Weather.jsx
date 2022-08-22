import React from "react";
import { useSelector } from "react-redux";
import { Extract5DayWeather } from "../utils/Utils";
import DailyWeather from "./DailyWeather";
import SingleDayWeather from "./SingleDayWeather";
import './weather.css'


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
        
        <section className="weather__details">
        <SingleDayWeather weathers={showndata}/>
        </section>

        
                
      </>
    );
  }

  return <>{currentWeather && data3HoursForecast && <WeatherForecastDays />}</>;
};

export default Weather;
