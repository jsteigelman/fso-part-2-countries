import { useState, useEffect } from 'react'
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
      setCountries(countries)
    })
  }, [])

  return (
    <div>
      <h1>Country Search App</h1>

      <h2>Search </h2>
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />

      <h2>Results</h2>
      <CountryList filteredCountries={filteredCountries} />
    </div>
  )
}

export default App
