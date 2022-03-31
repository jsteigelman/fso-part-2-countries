import { useState } from 'react'
import CountryRecordAdvanced from './CountryRecordAdvanced'
import CountryRecordBasic from './CountryRecordBasic'

const Country = ({ country, expandObject }) => {
    const [expand, setExpand] = useState(expandObject[country.name.common])

    // expand or collapse country record
    const toggleExpand = () => {
        setExpand(!expand)
    } 
    
    const fullRecord = <div><CountryRecordAdvanced country={country} /><button onClick={toggleExpand}>Collapse Record</button></div>
    const partialRecord = <div><CountryRecordBasic country={country} expandObject={expandObject} /> <button onClick={toggleExpand}>Show Full Record</button></div>
    const displayRecord = expand ? (fullRecord) : (partialRecord)

  return (
    displayRecord
  )
}

export default Country
