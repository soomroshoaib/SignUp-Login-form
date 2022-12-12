import React from 'react'
import "./Card.css"
import moment from "moment"

 const WeatherCard = ({name , date, temp, min, max }) => {
  return (
    <div className='Card'>
         <h1>{name}</h1>
         <h2>{moment(date).format("dddd ha")}</h2>
         <h1> Temp :  {temp} °C </h1>
         <span>Minimum : {min} °C </span><br /> <br />
         <span>Maximum {max} °C</span>
       </div>
  )
}

export default WeatherCard