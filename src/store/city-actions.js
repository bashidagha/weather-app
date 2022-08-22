import store from "./index";
import { cityActions } from "./city-slice";
import { ExtractDateInfo } from "../components/Utils";

//5 days
export const fetchCityWeather = () => {
  const state = store.getState();
  const cityName = state.city.name;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch city weather.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const weatherData = await fetchData();

      dispatch(cityActions.setCityForecastWeather(weatherData));
    } catch (error) {
      console.log(error.message);
    }
  };
};

//current wather
export const fetchCityCurrentWeather = () => {
  const state = store.getState();
  const cityName = state.city.name;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch city weather.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const weatherData = await fetchData();

      dispatch(cityActions.setCurrentDate(ExtractDateInfo(weatherData.dt)));

      dispatch(cityActions.setCityCurrentWeather(weatherData));
    } catch (error) {
      console.log(error.message);
    }
  };
};


