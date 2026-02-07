import React, { createContext, useState } from 'react'

export const dataContext = createContext()

const UserContext = ({ children }) => {
  const [input, setInput] = useState('')
  const [cate, setCate] = useState('food_items')

  const data = {
    input,
    setInput,
    cate,
    setCate
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
