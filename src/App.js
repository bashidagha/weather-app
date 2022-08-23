import { useEffect } from "react";
import { useSelector } from "react-redux";
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
  }, []);

  return (
    <div>
      <Weather />
    </div>
  );
}

export default App;
