'use client'
import Image from 'next/image'
import React from 'react'
import CustomButton from './shared/CustomButton'
import Link from 'next/link'


const Navbar = () => {
    const SignUp = () => {

    }
  return (
    <header className='w-full absolute z-10 '>
        <nav className='max-w-[1440px] flex justify-between mx-auto items-center
        sm:px-16 px-6 py-4'>
           <Link href='/' className='flex justify-center items-center'>
               <Image src={'/logo.svg'} alt='car logo'
               width={118}
               height={32}
               className='object-contain'
               />
               
           </Link>
           <CustomButton 
           title='Sign in'
            handleClick={SignUp} 
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>

    </header>
  )
}

export default Navbar