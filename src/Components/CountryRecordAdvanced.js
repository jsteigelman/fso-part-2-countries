const CountryRecordAdvanced = ({ country }) => {
    
  const languages = country.languages
  const listLanguages = () => {
    console.log('list languages is running')
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
      <img src={country.flags.png} alt='The country flag' />
      <img src={country.coatOfArms.png} alt="The country's coat of arms" />
    </div>
  )
}

export default CountryRecordAdvanced
