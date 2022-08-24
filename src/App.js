import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import {
  fetchCityCurrentWeather,
  fetchCityWeather,
} from "./store/city-actions";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  let cityForecastWeather = useSelector(
    (state) => state.city.cityForecastWeather
  );
  let cityCurrentWeather = useSelector(
    (state) => state.city.cityCurrentWeather
  );

  useEffect(() => {
    dispatch(fetchCityCurrentWeather());
    dispatch(fetchCityWeather());
  }, []);

  return (
    <>{cityForecastWeather && cityCurrentWeather ? <Weather /> : <Loading />}</>
  );
}

export default App;
