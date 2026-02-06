import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";

const Nav = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <IoFastFoodSharp className='w-[30px] h-[30px] text-green-500' />
      </div>

      <form className='w-[45%]  h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' >
        <IoSearchSharp  className='text-green-500 w-[20px] h-[20px] '/>
        <input type='text' placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20%]' />
      </form>

      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center  rounded-md shadow-xl relative'>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
        <RiShoppingBag3Line className='w-[30px] h-[30px] text-green-500' />
      </div>

    </div>
  )
}

export default Nav
