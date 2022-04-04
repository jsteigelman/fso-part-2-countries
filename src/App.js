import { useState, useEffect } from 'react'
import './App.css'
import CountryList from './Components/CountryList'
import SearchForm from './Components/SearchForm'
const axios = require('axios')

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  const countriesApi = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    axios.get(countriesApi).then((response) => {
      const countries = response.data
      // console.log(countries)
      setCountries(countries)
    })
  }, [])

  return (
    <div className='app'>
      <div className='appContainer'>
        <div className='appHeader'>
          <h1>Where in the World</h1>

          <SearchForm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            countries={countries}
            setFilteredCountries={setFilteredCountries}
          />
        </div>
        <div>
        <CountryList filteredCountries={filteredCountries} />

        </div>
      </div>
    </div>
  )
}

export default App
