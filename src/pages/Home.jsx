import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFood =
    selectedCategory === "All"
      ? food_items
      : food_items.filter(
          (item) =>
            item.food_category === selectedCategory.toLowerCase()
        )

  return (
    <div className='bg-slate-300 w-full min-h-screen'>

      <Nav/>

      <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        {Categories.map((item)=>(
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
        {filteredFood.map((item)=>(
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

    </div>
  )
}

export default Home
