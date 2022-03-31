const CountryRecordAdvanced = ({ country }) => {
    
  // display each language included in languages array
  const languages = country.languages
  const listLanguages = () => {
    for (const language in languages) {
      return <li>{languages[language]}</li>
    }
  }

  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>The capital city is {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>The languages spoken include:</p>
      <ul>{listLanguages()}</ul>
      <img src={country.flags.png} alt='The country flag' width="200"/>
      <br />
      <img src={country.coatOfArms.png} alt="The country coat of arms" width="100" />
    </div>
  )
}

export default CountryRecordAdvanced
