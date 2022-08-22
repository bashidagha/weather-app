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

export function getDateFromDay(now) {

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

export function Extract5Day(weatherJSON) {
  //extract weather in 10 p.m
}

export function ExtractDateInfo(dateSecond) {
  const milisecond = dateSecond * 1000;

  const date = new Date(milisecond);

  const month = monthNames[date.getMonth()];
  const day = dayNames[date.getDay()];
  const year = date.getFullYear();

  return {
    month: month,
    day: day,
    year: year,
  };
}
