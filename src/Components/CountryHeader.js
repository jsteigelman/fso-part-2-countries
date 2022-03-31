const CountryHeader = ({ country, expand, setExpand }) => {
  
  // expand or collapse country record
  const toggleExpand = () => {
    setExpand(!expand)
    console.log('Expand value is ', expand)
  }

  const buttonText = expand ? 'Close Record' : 'Open Record'

  return (
    <li key={country.name.common}>
      <h3>{country.name.common}</h3>
      <button onClick={toggleExpand}>{buttonText}</button>
    </li>
  )
}
export default CountryHeader
