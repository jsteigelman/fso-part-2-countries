import Country from './Country'
import CountryHeader from './CountryHeader'
import CountryBody from './CountryBody'
import './CountryList.css'

const CountryList = ({ filteredCountries }) => {

  // manage expanded / collapsed status for each country record by saving status to object
  let expandObject = {}
  filteredCountries.forEach((country) => {
    expandObject[country.name.common] = false
  })

  // return a list of the filtered countries
  const filteredResults = filteredCountries.map((country) => {
    return <Country key={country.name.common} country={country} expandObject={expandObject} />
  })

  const startMessage = 'Get started by entering a search term!'
  const tryAgainMessage = `Your search returned ${filteredCountries.length} results. Please narrow your search and try again.`

  const results = () => {
    if (filteredCountries.length === 0) {
      return <p className="searchMessage"> {startMessage} </p>
    } else if (filteredCountries.length === 1) {
      return (<div><h3>{filteredCountries[0].name.common}</h3> <CountryBody country={filteredCountries[0]} /></div>)
    } else if (filteredCountries.length > 10) {
      return <p className="searchMessage"> {tryAgainMessage} </p>
    } else {
      return <ul className="countryList">{filteredResults}</ul>
    }
  }

  return <div>{results()}</div>
}

export default CountryList
