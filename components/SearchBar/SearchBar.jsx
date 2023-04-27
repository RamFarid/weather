import React, { useState } from 'react'
import SearchBtn from './SearchBtn'
import CurrentZoneBtn from '@/components/SearchBar/CurrentZoneBtn'
import CountriesList from '@/components/SearchBar/CountriesList'

function SearchBar() {
  const [country, setCountry] = useState('')
  const changeCountry = (e) => setCountry(e.target.value)
  return (
    <div className='search'>
      <input
        type='text'
        list='countries'
        placeholder='Select over 400+ contries...'
        id='country'
        value={country}
        onChange={changeCountry}
      />
      <CountriesList />
      <SearchBtn country={country} setCountry={setCountry} />
      <CurrentZoneBtn setCountry={setCountry} />
    </div>
  )
}

export default SearchBar
