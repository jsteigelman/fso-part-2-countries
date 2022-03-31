import { useState } from 'react'
import CountryRecordAdvanced from './CountryRecordAdvanced'
import CountryRecordBasic from './CountryRecordBasic'

const Country = ({ country, expandObject }) => {
    const [expand, setExpand] = useState(expandObject[country.name.common])

    // expand or collapse country record
    const toggleExpand = () => {
        setExpand(!expand)
    } 

    const displayRecord = expand ? (<CountryRecordAdvanced country={country} />) : (<div> <CountryRecordBasic country={country} expandObject={expandObject} /> <button onClick={toggleExpand}>Show Full Record</button> </div>)

  return (
    displayRecord
  )
}


export default Country
