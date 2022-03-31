import { useState } from 'react'
import CountryBody from './CountryBody'
import CountryHeader from './CountryHeader'

const Country = ({ country, expandObject }) => {
  const [expand, setExpand] = useState(expandObject[country.name.common])

  // expand or collapse country record
  const toggleExpand = () => {
    setExpand(!expand)
  }

  const fullRecord = (
    <div>
      <CountryHeader
        expand={expand}
        setExpand={setExpand}
        country={country}
        // expandObject={expandObject}
      />
      <CountryBody country={country} />
    </div>
  )

  const partialRecord = (
    <div>
      <CountryHeader
        expand={expand}
        setExpand={setExpand}
        country={country}
        // expandObject={expandObject}
      />{' '}
    </div>
  )

  const displayRecord = expand ? fullRecord : partialRecord

  return displayRecord
}

export default Country
