import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const DailyWeather = useSelector((state) => state.city.cityWeather);

  function WeatherForecastDays() {
    return (
      <>
        {DailyWeather.list.map((dayWeather) => (
          <>{dayWeather.dt}</>
        ))}
      </>
    );
  }

  return <>{DailyWeather && <WeatherForecastDays />}</>;
};

export default Weather;
