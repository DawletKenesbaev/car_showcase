'use client'
import React from 'react'
import { useState } from 'react'


import SearchManafacture from './shared/SearchManafacture'

const SearchBar = () => {
  const [manafacturer, setManafacturer] = useState('')
  const handleSearch = () => {
     // dd
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar_item'>
          <SearchManafacture
          manafacturer={manafacturer}
          setManafacturer={setManafacturer}
           />
        </div>
    </form>
  )
}

export default SearchBar