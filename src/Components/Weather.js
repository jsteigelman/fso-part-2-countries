
import {useEffect} from 'react'
const axios = require('axios')

const Weather = ({ coords }) => {

  const latitude = coords[0]
  const longitude = coords[1]
  const apiKey = process.env.OPEN_WEATHER_API_KEY
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

  console.log('Lat: ', latitude, 'long: ', longitude)

  useEffect(() => {
    axios
        .get(weatherApi)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
  }, [])

  return (
    <div>
      <p>Weather data goes here...</p>
    </div>
  )
}

export default Weather
