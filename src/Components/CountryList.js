import CountryRecordBasic from './CountryRecordBasic'
import CountryRecordAdvanced from './CountryRecordAdvanced'

const CountryList = ({ filteredCountries }) => {
  const filteredResults = filteredCountries.map((country) => (
    <CountryRecordBasic country={country} />
  ))

  const results = () => {
    if (filteredCountries.length === 0) {
      return <p>Get started by entering a search term</p>
    } else if (filteredCountries.length === 1) {
      return <CountryRecordAdvanced country={filteredCountries[0]} />
    } else if (filteredCountries.length > 10) {
      return (
        <p>
          Your search returned {filteredCountries.length} results. Please narrow
          your search and try again.
        </p>
      )
    } else {
      return filteredResults
    }
  }

  return <div>{results()}</div>
}

export default CountryList
