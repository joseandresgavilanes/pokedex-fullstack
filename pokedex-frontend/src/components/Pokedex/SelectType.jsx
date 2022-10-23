import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({optionType, setOptionType, setPokeSearch}) => {

  const [listTypes, setListTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setListTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')
  }

  return (
    <select className='pokemonSelector' value={optionType} onChange={handleChange}>
      <option className='pokemonSelector__option' value="All">All</option>
      {
        listTypes?.map(type => (
          <option className='pokemonSelector__list' key={type.name} value={type.name}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType