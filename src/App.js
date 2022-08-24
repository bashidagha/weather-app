import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Weather from "./components/Weather";
import {
  fetchCityCurrentWeather,
  fetchCityWeather,
} from "./store/city-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityCurrentWeather());
    dispatch(fetchCityWeather());
    console.log('useEffect ran')

  }, []);

  return (
      <Weather />
  );
}

export default App;
