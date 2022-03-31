import CountryRecordAdvanced from './CountryRecordAdvanced'
import Country from './Country'

const CountryList = ({ filteredCountries }) => {

  // manage expanded / collapsed status for each country record by saving status to object
  let expandObject = {}
  filteredCountries.forEach((country) => {
    expandObject[country.name.common] = false
    console.log(
      `The NEW key is ${country.name.common} and the value is ${
        expandObject[country.name.common]
      }`
    )
  })

  // return a list of the filtered countries
  const filteredResults = filteredCountries.map((country) => {
    return <Country country={country} expandObject={expandObject} />
  })

  const startMessage = 'Get started by entering a search term'
  const tryAgainMessage = `Your search returned ${filteredCountries.length} results. Please narrow your search and try again.`

  const results = () => {
    if (filteredCountries.length === 0) {
      return startMessage
    } else if (filteredCountries.length === 1) {
      return <CountryRecordAdvanced country={filteredCountries[0]} />
    } else if (filteredCountries.length > 10) {
      return tryAgainMessage
    } else {
      return <ul>{filteredResults}</ul>
    }
  }

  return <div>{results()}</div>
}

export default CountryList
