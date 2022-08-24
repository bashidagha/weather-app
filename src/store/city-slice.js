import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    name: "Tehran",
    citySearch: false,
    currentDate: null,
    similarCity: null,
    cityForecastWeather: null,
    cityCurrentWeather: null,
  },
  reducers: {
    changeCity(state, action) {
      state.name = action.payload;
    },

    setCityForecastWeather(state, action) {
      state.cityForecastWeather = action.payload;
    },

    setSimilarCity(state, action) {
      state.similarCity = action.payload;
    },

    setCityCurrentWeather(state, action) {
      state.cityCurrentWeather = action.payload;
    },

    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
    showCitySearch(state) {
      state.citySearch = true;
    },

    hideCitySearch(state) {
      state.citySearch = false;
    },
  },
});

export const cityActions = citySlice.actions;

export default citySlice;
