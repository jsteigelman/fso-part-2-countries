import Weather from './Weather'
import { useState } from 'react'
import './CountryBody.css'

const CountryBody = ({ country }) => {
  // display each language included in languages array
  const languages = country.languages
  const listLanguages = () => {
    for (const language in languages) {
      return <li>{languages[language]}</li>
    }
  }

  // <Weather capital={country.capital} coords={country.capitalInfo.latlng} />

  return (
    <div className='countryBody'>
      <p>The capital city is {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>The languages spoken include:</p>
      <ul>{listLanguages()}</ul>
      <img src={country.flags.png} alt='The country flag' width='100' />
      <br />
    </div>
  )
}

export default CountryBody
