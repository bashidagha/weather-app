import React from "react";
import { useSelector } from "react-redux";
import { Extract5DayWeather } from "../utils/Utils";
import DailyWeather from "./DailyWeather";
import Forecast5DayWeather from "./Forecast5DayWeather";
import TodayWeatherHighlight from "./TodayWeatherHighlight";
import styles from "./weather.module.css";

const Weather = () => {
  const dataForecast = useSelector((state) => state.city.cityForecastWeather);

  const currentWeather = useSelector((state) => state.city.cityCurrentWeather);

  function WeatherForecastDays() {
    const showndata = Extract5DayWeather(dataForecast);

    return (
      <div className={styles.weathers}>
        <DailyWeather weather={currentWeather} />

        <section className={styles.weather__details}>
          <Forecast5DayWeather weathers={showndata} />

          <TodayWeatherHighlight weather={currentWeather} />

          <div className={styles.footer__owner}>
            created by <a href="https://github.com/bashidagha">bashidagha</a> -
            devChallenges.io
          </div>

        </section>
      </div>
    );
  }

  return <>{currentWeather && dataForecast && <WeatherForecastDays />}</>;
};

export default Weather;
