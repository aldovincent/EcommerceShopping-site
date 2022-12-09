import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartData: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    allCartData: (state, action) => {
        state.cartData += action.payload
      },
    
  },
})
export const { allCartData } = cartSlice.actions
export default cartSlice.reducer
