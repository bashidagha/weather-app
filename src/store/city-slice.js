import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: { name: "tehran", citySearch: false, cityWeather: null },
  reducers: {
    changeCity(state, action) {
      state.name = action.payload;
    },

    setCityWeather(state, action) {
      state.cityWeather = action.payload;
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
