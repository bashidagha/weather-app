import store from "./index";
import { cityActions } from "./city-slice";
import { ExtractDateInfo } from "../utils/Utils";

export const fetchCityWeather = () => {
  const state = store.getState();
  const citySpec = state.city.citySpec;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        // `http://localhost:3000/temp.json`
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${citySpec.lat}&lon=${citySpec.lon}&days=6&key=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch city weather.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const weatherData = await fetchData();

      dispatch(cityActions.setCityForecastWeather(weatherData.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchCityCurrentWeather = () => {
  const state = store.getState();
  const citySpec = state.city.citySpec;

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?lat=${citySpec.lat}&lon=${citySpec.lon}&key=${process.env.REACT_APP_API_KEY}`
        // `http://localhost:3000/temp2.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch city weather.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const weatherData = await fetchData();

      dispatch(
        cityActions.setCurrentDate(ExtractDateInfo(weatherData.data[0].ts))
      );

      dispatch(cityActions.setCityCurrentWeather(weatherData.data[0]));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchSimilarCity = (query) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?appid=${process.env.REACT_APP_API_KEY2}&q=${query}&limit=8`
      );

      if (!response.ok) {
        throw new Error("Could not fetch similar city.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const similar = await fetchData();

      const abstractSimilarCity = similar.map((w) => {
        return {
          city: w.name,
          format: `${w.name}, ${w.state ? `${w.state}, ` : ""}${w.country}`,
          lat: w.lat,
          lon: w.lon,
        };
      });

      dispatch(cityActions.setSimilarCity(abstractSimilarCity));
    } catch (error) {
      console.log(error.message);
    }
  };
};
