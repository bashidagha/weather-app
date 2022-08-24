import store from "./index";
import { cityActions } from "./city-slice";
import { ExtractDateInfo } from "../utils/Utils";

export const fetchCityWeather = () => {
  const state = store.getState();
  const cityName = state.city.name;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/temp.json`
        // `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=6&key=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch city weather.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const weatherData = await fetchData();

      console.log('forecast fetched')

      dispatch(cityActions.setCityForecastWeather(weatherData.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchCityCurrentWeather = () => {
  const state = store.getState();
  const cityName = state.city.name;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        // `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${process.env.REACT_APP_API_KEY}`
        `http://localhost:3000/temp2.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch city weather.");
      }

      const data = await response.json();
      

      return data;
    };

    try {
      const weatherData = await fetchData();

      console.log('current fetched')

      dispatch(
        cityActions.setCurrentDate(ExtractDateInfo(weatherData.data[0].ts))
      );

      dispatch(cityActions.setCityCurrentWeather(weatherData.data[0]));
    } catch (error) {
      console.log(error.message);
    }
  };
};
