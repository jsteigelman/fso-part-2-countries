import Country from './Country'

const CountryList = ({ filteredCountries }) => {

  const filteredResults = filteredCountries.map((country) => (
    <Country country={country} />
  ))

  const results = () => {
    if (filteredCountries.length === 0) {
      return <p>Get started by entering a search term</p>
    } else if (filteredCountries.length > 10) {
      return <p>Your search returned {filteredCountries.length} results. Please narrow your search and try again.</p>
    } else {
      return filteredResults
    }
  }

  return (
      <div>{results()}</div>
)
}

export default CountryList
