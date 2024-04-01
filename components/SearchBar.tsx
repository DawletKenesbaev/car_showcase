'use client'
import React from 'react'
import { useState } from 'react'

import SearchManafacture from './shared/SearchManafacture'
import Image from 'next/image'


const SearchButton = ({otherClasses}:{otherClasses:string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
     <Image
     src='/magnifying-glass.svg'
     alt='icon'
     width={40}
     height={40}
     className='object-contain'
     />
  </button>
) 
const SearchBar = () => {
  const [manafacturer, setManafacturer] = useState('')
  const [model, setModel] = useState('')
  const handleSearch = () => {
     // dd
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
          <SearchManafacture
          manafacturer={manafacturer}
          setManafacturer={setManafacturer}
           />
          <SearchButton otherClasses='sm:hidden'/>

        </div>
        <div className='searchbar__item'>
           <Image
           src='/model-icon.png'
           width={25}
           height={25}
           alt='icon'
           className='absolute w-[20px] h-[20px] ml-4'
            />
            <input
            type='text'
            name='model'
            value={model}
            onChange={(e)=> setModel(e.target.value)}
            placeholder='Tiguan'
            className='searchbar__input'
             />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar