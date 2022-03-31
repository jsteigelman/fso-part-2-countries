import { useState } from 'react'
import CountryRecordAdvanced from './CountryRecordAdvanced'


const CountryRecordBasic = ({ country }) => {

  // create object with keys of each country name
  // value of each key is the expand value
  // render advancedRecord if the key value for the current country is true

  return (
    <li key={country.name.common}> 
      {country.name.common} 
      {" "}
      
    </li>
  )
}


export default CountryRecordBasic
