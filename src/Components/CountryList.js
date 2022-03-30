import Country from './Country'

const CountryList = ({ filteredCountries }) => {
    return (
        filteredCountries.map((country) => (
            <Country country={country} />
          )
    ))
}

export default CountryList