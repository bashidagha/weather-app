import store from "../store/index";
import clear from "../assets/Clear.png";
import heavyCloud from "../assets/HeavyCloud.png";
import lightCloud from "../assets/LightCloud.png";
import Thunder from "../assets/Thunderstorm.png";
import heavyRain from "../assets/HeavyRain.png";
import lightRain from "../assets/LightRain.png";
import hail from "../assets/Hail.png";
import shower from "../assets/Shower.png";
import sleet from "../assets/Sleet.png";
import snow from "../assets/Snow.png";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

function formattedDayNames(now) {
  const dateObject = new Date(now);

  let day = dayNames[dateObject.getDay()];

  let formatedDay = new Array(5);

  const index = dayNames.findIndex((item) => item === day);

  formatedDay[0] = "Tomorrow";
  formatedDay[1] = dayNames[index + 2];
  formatedDay[2] = dayNames[index + 3];
  formatedDay[3] = dayNames[index + 4];
  formatedDay[4] = dayNames[index + 5];

  return formatedDay;
}

export function ExtractDateInfo(dateSecond) {
  const milisecond = dateSecond * 1000;

  const date = new Date(milisecond);

  const month = monthNames[date.getMonth()];
  const day = dayNames[date.getDay()];
  const year = date.getFullYear();

  const hours = date.getHours();
  const dayOfMonth = date.getDate();

  return {
    dayOfMonth: dayOfMonth,
    hours: hours,
    month: month,
    day: day,
    year: year,
  };
}

export function Extract5DayWeather(dataForecast) {
  const state = store.getState();
  const current = state.city.currentDate;
  let temp;
  let extractedDate = new Array(5);
  let count = 0;

  const daysFormatted = formattedDayNames(current);
  const days5Forecast = dataForecast.slice(1,6)

  for(let i=0; i<5 ; i++){

    temp = ExtractDateInfo(days5Forecast[i].ts);


    extractedDate[count] = {
      ...days5Forecast[i],
      dayName: daysFormatted[count],
      month: temp.month,
      dayofMonth: temp.dayOfMonth,
    };
    count++;
  }


  return extractedDate;
}

export function photoOfWeather(conditionId) {
  if (conditionId === 800) {
    return clear;
  } else if ([801, 802].indexOf(conditionId) > -1) {
    return lightCloud;
  } else if ([803, 804].indexOf(conditionId) > -1) {
    return heavyCloud;
  } else if (
    [...Array(33).keys()].map((a) => a + 200).indexOf(conditionId) > -1
  ) {
    return Thunder;
  } else if (conditionId === 500) {
    return lightRain;
  } else if (
    [...Array(20).keys()].map((a) => a + 501).indexOf(conditionId) > -1
  ) {
    return heavyRain;
  } else if (
    [...Array(4).keys()].map((a) => a + 521).indexOf(conditionId) > -1
  ) {
    return shower;
  } else if (
    [...Array(23).keys()].map((a) => a + 600).indexOf(conditionId) > -1
  ) {
    if (conditionId === 611) {
      return sleet;
    }
    return snow;
  } else {
    return clear;
  }
}



