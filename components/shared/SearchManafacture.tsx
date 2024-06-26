import React from 'react'
import { useState,Fragment } from 'react';
import { Combobox,Transition } from '@headlessui/react';
import Image from 'next/image';

import { manufacturers } from '@/constants';
interface Props {
    manafacturer:string;
    setManafacturer: (manafacturer:string) => void
}
const SearchManafacture = ({manafacturer,setManafacturer}:Props) => {
  const [query, setQuery] = useState('');
 

  const filteredManafacturers = query ==='' ? manufacturers :
  manufacturers.filter((item) => 
   item.toLowerCase().replace(/\s+/g,'').includes(
    query.toLowerCase().replace(/\s+/g,'')
   )
  )
  return (
    <div className='search-manufacturer'>
      <Combobox
      onChange={setManafacturer}
       value={manafacturer}
      >
        <div className='relative w-full '>
            <Combobox.Button className='absolute top-[14px]'>
               <Image
                src='/car-logo.svg'
                alt='logo'
                width={20}
                height={20}
               />
            </Combobox.Button>
            <Combobox.Input
             className='search-manufacturer__input outline-none'
             placeholder='Volkswagen'
             displayValue={(manafacturer:string)=> manafacturer}
             onChange={(e) => setQuery(e.target.value)}
            />
            <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={()=> setQuery('')}
            >
             <Combobox.Options>
                {
                  filteredManafacturers.map((item) => (
                    <Combobox.Option
                    key={item}
                    value={item}
                    className={({active}) =>`
                      relative search-manufacturer__option
                      ${active ? 'bg-primary-blue text-white': 'text-gray-900'}
                    ` }
                    >
                      {item}
                    </Combobox.Option>
                  ))
                }
             </Combobox.Options>
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManafacture