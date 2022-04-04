import './CountryHeader.css'
import expandButton from './../images/expand_button.png'
import collapseButton from './../images/collapse_button.png'

const CountryHeader = ({ country, expand, setExpand }) => {
  // expand or collapse country record
  const toggleExpand = () => {
    setExpand(!expand)
  }

  const displayButton = expand ? collapseButton : expandButton

  return (
    <li key={country.name.common} className='countryHeader'>
      <div className="countryHeader__text">
        <h3>{country.name.common}</h3>
        <p className='countryRegion'>{country.subregion}</p>
      </div>
      <div className='expandImageContainer'>
        <img onClick={toggleExpand} src={displayButton} alt='expand' />
      </div>
    </li>
  )
}
export default CountryHeader
