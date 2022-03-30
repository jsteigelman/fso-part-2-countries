import { useState, useEffect } from 'react'

const axios = require('axios');
const countriesApi = 'https://restcountries.com/v3.1/all' 

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(countriesApi)
      .then((response) => {
        const countries = response.data
        console.log(countries)
        setCountries(countries)
      })
  })

  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default App;
