import { useState } from 'react'
import CountryBody from './CountryBody'
import CountryHeader from './CountryHeader'
import './Country.css'

const Country = ({ country, expandObject }) => {
  const [expand, setExpand] = useState(expandObject[country.name.common])

  const fullRecord = (
    <div className="countryContainer">
      <CountryHeader
        expand={expand}
        setExpand={setExpand}
        country={country}
      />
      <CountryBody country={country} />
    </div>
  )

  const partialRecord = (
    <div className="countryContainer">
      <CountryHeader
        expand={expand}
        setExpand={setExpand}
        country={country}
      />{' '}
    </div>
  )

  const displayRecord = expand ? fullRecord : partialRecord
  return displayRecord
}

export default Country