import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    citySpec: { name: "Tehran", lat: 35.6892523, lon: 51.3896004 },
    citySearch: false,
    currentDate: null,
    similarCity: null,
    cityForecastWeather: null,
    cityCurrentWeather: null,
  },
  reducers: {
    changeCity(state, action) {
      state.citySpec = action.payload;
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
