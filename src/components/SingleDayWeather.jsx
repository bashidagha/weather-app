import React from 'react'




const SingleDayWeather = (props) => {

  return (
    <p>
      {props.weather.dt}
    </p>
  )
}

export default SingleDayWeather