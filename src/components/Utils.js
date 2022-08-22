import store from "../store";

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

export function Extract5DayWeather(data3HoursForecast) {

  const state = store.getState();
  const current = state.city.currentDate;
  let temp;
  let extractedDate = new Array(5);
  let count = 0;

  const daysFormatted = formattedDayNames(current);

  for (let i = 0; i < 40; i++) {
    temp = ExtractDateInfo(data3HoursForecast.list[i].dt);

    if (
      (temp.day !== current.day && temp.hours === 9) ||
      temp.hours === 10 ||
      temp.hours === 11
    ) {
      extractedDate[count] = {
        ...data3HoursForecast.list[i],
        dayName: daysFormatted[count],
        month: temp.month,
        dayofMonth: temp.dayOfMonth,
      };
      count++;
    }
  }


  return extractedDate;
}
