import store from "./index";
import { cityActions } from "./city-slice";

export const fetchCityWeather = () => {
  const state = store.getState();
  const cityName = state.city.name;

  console.log(process.env);

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

      console.log(weatherData);
      dispatch(cityActions.setCityWeather(weatherData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
