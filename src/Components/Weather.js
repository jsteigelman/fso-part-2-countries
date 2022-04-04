
import { useState, useEffect } from 'react'
const axios = require('axios')

const Weather = ({ capital, coords }) => {

  const [weatherObject, setWeatherObject] = useState('')
  const [temp, setTemp] = useState('')
  // const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  const weatherStackApi = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${capital}`
  

  console.log('key is: ', weatherStackApi)
  let displayWeather = 'Loading...'

  useEffect(() => {
    axios.get(weatherStackApi)
    .then((response) => {
      const weatherResponse = response.data
      setWeatherObject(weatherResponse)
      setTemp(weatherResponse) 
    .catch((error) => {
      console.log(error)
    })
  }, [displayWeather])

  displayWeather = (
    <p>Temperature: {temp}</p>
  )
})

console.log('WeatherObject: ', weatherObject)

  return (
    <div>
    <h3>Weather for {capital}</h3>
    <p>{ weatherObject.length < 1 ? 'Loading...' : displayWeather}</p>
    </div>
  )

}

export default Weather
