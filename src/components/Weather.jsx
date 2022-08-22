import React from "react";
import { useSelector } from "react-redux";
import SingleDayWeather from "./SingleDayWeather";
import { getDateFromDay } from "./Utils";


const Weather = () => {
  const DailyWeather = useSelector((state) => state.city.cityForecastWeather);

  function WeatherForecastDays() {

    const days = getDateFromDay(DailyWeather.list[0].dt_txt);

    return (
      <>
        {DailyWeather.list.map((dayWeather, index) => (


        
          <SingleDayWeather weather={dayWeather} day={days[index]} key={dayWeather.dt}/>
        ))}
      </>
    );
  }

  return <>{DailyWeather && <WeatherForecastDays />}</>;
};

export default Weather;
