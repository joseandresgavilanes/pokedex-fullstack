import React from 'react'

const SearchInput = ({setPokeSearch, setOptionType}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }

  return (
    <form className="seach_bar" onSubmit={handleSubmit}>
      <input placeholder='Find your pokemon' className="input" id='searchText' type="text" />
      <button className="noselect" >GO!</button>
    </form>
  )
}

export default SearchInput