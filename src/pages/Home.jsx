import React, { useState, useContext } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { dataContext } from '../Context/UserContext'
import { ImCross } from "react-icons/im"
import Card2 from '../components/Card2'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveItem, IncreaseQty, DecreaseQty } from '../redux/cartSlice'

const Home = () => {

  const { cate, showCart, setShowCart } = useContext(dataContext)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const filteredFood =
    selectedCategory === "All"
      ? Array.isArray(cate) ? cate : []
      : Array.isArray(cate)
        ? cate.filter(
            (item) =>
              item.food_category === selectedCategory.toLowerCase()
          )
        : []

  const subtotal = items.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.qty),
    0
  )

  const deliveryFee = items.length > 0 ? 20 : 0
  const taxes = subtotal * 0.05
  const total = subtotal + deliveryFee + taxes

  return (
    <div className='bg-slate-300 w-full min-h-screen'>

      <Nav />

      <div className='flex flex-wrap justify-center items-center gap-5 w-full mt-5'>
        {Categories.map((item) => (
          <div
            key={item.id}
            className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
            onClick={() => setSelectedCategory(item.name)}
          >
            {item.icone}
            {item.name}
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-5 mt-5'>
        {filteredFood.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>

        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>
            Order Items
          </span>

          <ImCross
            className='w-[30px] h-[30px] text-green-400 cursor-pointer hover:text-gray-600'
            onClick={() => setShowCart(false)}
          />
        </header>

        <div className='mt-5 flex flex-col gap-8 mt-9'>
          {items.map((item) => (
            <Card2
              key={item.id}
              item={item}
              onRemove={() => dispatch(RemoveItem(item.id))}
              onIncrease={() => dispatch(IncreaseQty(item.id))}
              onDecrease={() => dispatch(DecreaseQty(item.id))}
            />
          ))}
        </div>

        {items.length > 0 && (
          <div className='mt-5 border-t pt-4'>
            <div className='flex justify-between text-gray-700'>
              <span>Subtotal</span>
              <span>Rs {subtotal.toFixed(0)}/-</span>
            </div>
            <div className='flex justify-between text-gray-700'>
              <span>Delivery Fee</span>
              <span>Rs {deliveryFee}/-</span>
            </div>
            <div className='flex justify-between text-gray-700'>
              <span>Taxes</span>
              <span>Rs {taxes.toFixed(0)}/-</span>
            </div>
            <div className='flex justify-between text-green-600 font-semibold text-lg mt-2'>
              <span>Total</span>
              <span>Rs {total.toFixed(0)}/-</span>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}

export default Home
