import React from 'react'
interface Props {
    title:string;
}
const CustomFilter = ({title}:Props) => {
  return (
    <div>{title}</div>
  )
}

export default CustomFilter