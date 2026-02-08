import React, { useContext, useEffect } from 'react'
import { IoFastFoodSharp, IoSearchSharp } from "react-icons/io5"
import { RiShoppingBag3Line } from "react-icons/ri"
import { dataContext } from '../Context/UserContext'
import { food_items } from '../food'
import { useSelector } from 'react-redux'

const Nav = () => {

  const { input, setInput, setCate, setShowCart } = useContext(dataContext)

  const items = useSelector(state => state.cart) // array

  useEffect(() => {
    if (input.trim() === "") {
      setCate(food_items)
    } else {
      setCate(
        food_items.filter(item =>
          item.food_name.toLowerCase().includes(input.toLowerCase())
        )
      )
    }
  }, [input])

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>

      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <IoFastFoodSharp className='w-[30px] h-[30px] text-green-500' />
      </div>

      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'>
        <IoSearchSharp className='text-green-500 w-[20px] h-[20px]' />
        <input
          type='text'
          placeholder='Search food, drinks, or dishes...'
          className='w-full outline-none text-[16px] md:text-[18px]'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {/* ✅ CART */}
      <div
        className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'
        onClick={() => setShowCart(true)}
      >
        {/* ✅ NUMBER FIX */}
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>
          {items.length}
        </span>

        <RiShoppingBag3Line className='w-[30px] h-[30px] text-green-500' />
      </div>

    </div>
  )
}

export default Nav
