import React from 'react'
import { Combobox } from '@headlessui/react';
interface Props {
    manafacturer:string;
    setManafacturer: (manafacturer:string) => void
}
const SearchManafacture = ({manafacturer,setManafacturer}:Props) => {
  return (
    <div>SearchManafacture</div>
  )
}

export default SearchManafacture