import React from 'react'
import { photoOfWeather } from '../utils/Utils'
import './dailyweather.css'

const DailyWeather = (props) => {

  const mainPhoto = photoOfWeather(props.weather.weather[0].id)


  return (
    <div className='current__weather'>
      
      
      <img src={mainPhoto} alt="main"></img>
    </div>
  )
}

export default DailyWeather