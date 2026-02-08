import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {

    AddItem: (state, action) => {
      const item = state.find(i => i.id === action.payload.id)

      if (item) {
        item.qty += 1
      } else {
        state.push({
          ...action.payload,
          price: Number(action.payload.price),
          qty: 1
        })
      }
    },

    RemoveItem: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },

    IncreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload)
      if (item) {
        item.qty += 1
      }
    },

    DecreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload)
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1
        } else {
          return state.filter(i => i.id !== action.payload)
        }
      }
    }

  }
})

export const {
  AddItem,
  RemoveItem,
  IncreaseQty,
  DecreaseQty
} = cartSlice.actions

export default cartSlice.reducer
