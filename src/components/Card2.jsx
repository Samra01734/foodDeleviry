import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { RemoveItem, IncreaseQty, DecreaseQty } from '../redux/cartSlice'

const Card2 = ({ item }) => {

  const dispatch = useDispatch()

  return (
    <div className='w-[100%] h-[120px] p-2 shadow-lg flex justify-between'>

      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
          <img
            src={item.image}
            className='object-cover w-full h-full'
            alt={item.name}
          />
        </div>

        <div className='w-[40%] h-full flex flex-col gap-5'>
          <div className='text-lg text-gray-600 font-bold'>
            {item.name}
          </div>

          <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden
          font-semibold border-2 border-green-400'>

            {/* ➖ decrease */}
            <button
              className='w-[30%] h-full bg-white text-green-400'
              onClick={() => dispatch(DecreaseQty(item.id))}
            >
              -
            </button>

            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>
              {item.qty}
            </span>

            {/* ➕ increase */}
            <button
              className='w-[30%] h-full bg-white text-green-400'
              onClick={() => dispatch(IncreaseQty(item.id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-end gap-6'>
        <span className='text-xl text-green-400 font-semibold'>
          Rs {item.price * item.qty}/-
        </span>

        {/* 🗑 delete */}
        <RiDeleteBin6Line
          className='w-[30px] h-[30px] text-red-400 cursor-pointer'
          onClick={() => dispatch(RemoveItem(item.id))}
        />
      </div>

    </div>
  )
}

export default Card2
