import './SearchForm.css'

const SearchForm = ({ countries, setFilteredCountries, searchTerm, setSearchTerm }) => {

  const handleFilter = (event) => {
    const userFilter = event.target.value
    setSearchTerm(userFilter)
  }

  const applyFilter = (event) => {
    event.preventDefault()
    const myFilter = countries.filter((countryObject) => {
      return countryObject.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredCountries(myFilter)
    setSearchTerm('')
  }

  return (
    <form onSubmit={applyFilter}>
      <input type='text' value={searchTerm} onChange={handleFilter} className="searchForm" placeholder="Search for a country..." />
    </form>
  )
}

export default SearchForm
