import { useState, useEffect } from 'react'

const axios = require('axios')

const Country = ({country}) => {
  return (
    <li key={country.name.common}>{country.name.common}</li>
  )
}

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

  const handleFilter = (event) => {
    const userFilter = event.target.value
    setSearchTerm(userFilter)
  }

  const applyFilter = (event) => {
    event.preventDefault()
    const myFilter = countries.filter((countryObject) => {
      return countryObject.name.common.includes(searchTerm)
    })
    setFilteredCountries(myFilter)
    setSearchTerm('')
  }

  const displayCountries = filteredCountries.map((country) => <Country country={country} />)

  return (
    <div>
      <p>Search Countries</p>
      <form onSubmit={applyFilter}>
        <input type='text' value={searchTerm} onChange={handleFilter} />
      </form>
      <div>
      {displayCountries}
      </div>
    </div>
  )
}

export default App
