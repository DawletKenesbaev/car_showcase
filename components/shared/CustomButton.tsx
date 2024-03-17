'use client'

import { MouseEventHandler } from "react";

interface Props {
    title:string;
    containerStyles?:string;
    handleClick:MouseEventHandler<HTMLButtonElement>
    btnType: 'button' | 'submit'
}
const CustomButton = ({title,containerStyles,handleClick,btnType}:Props) => {
  return (
    <button 
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={()=>{}}
    >
        <span className={`flex-1 `}>
          {title}
        </span>
    </button>
  )
}

export default CustomButton