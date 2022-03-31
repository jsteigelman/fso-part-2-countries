const CountryRecordBasic = ({ country }) => {
  return <li key={country.name.common}>{country.name.common}</li>
}

export default CountryRecordBasic
