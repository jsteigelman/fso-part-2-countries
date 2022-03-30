const Country = ({ country }) => {
  return <li key={country.name.common}>{country.name.common}</li>
}

export default Country
