'use client'

import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
    title:string;
    containerStyles?:string;
    handleClick:MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit';
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}
const CustomButton = ({title,containerStyles,handleClick,textStyles,rightIcon, btnType='button'}:Props) => {
  return (
    <button 
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={()=>{}}
    >
        <span className={`flex-1 ${textStyles}`}>
          {title}
        </span>
        {
          rightIcon && (
            <div className="relative w-6 h-6 ">
              <Image
               src={rightIcon}
               alt="icon"
               fill
               className="object-contain"
               />
            </div>
          )
        }
    </button>
  )
}

export default CustomButton