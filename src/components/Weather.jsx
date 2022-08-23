import React from "react";
import { useSelector } from "react-redux";
import { Extract5DayWeather } from "../utils/Utils";
import DailyWeather from "./DailyWeather";
import SingleDayWeather from "./SingleDayWeather";
import TodayWeatherHighlight from "./TodayWeatherHighlight";
import "./weather.css";

const Weather = () => {
  const dataForecast = useSelector((state) => state.city.cityForecastWeather);

  const currentWeather = useSelector((state) => state.city.cityCurrentWeather);

  function WeatherForecastDays() {
    const showndata = Extract5DayWeather(dataForecast);

    return (
      <div className="weathers">
        <DailyWeather weather={currentWeather} />

        <section className="weather__details">
          <SingleDayWeather weathers={showndata} />

          <TodayWeatherHighlight weather={currentWeather}/>


        </section>
      </div>
    );
  }

  return <>{currentWeather && dataForecast && <WeatherForecastDays />}</>;
};

export default Weather;
