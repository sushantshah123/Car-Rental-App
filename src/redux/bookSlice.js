import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
  totalAmount:0,
  totalQuantity:0,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const item = state.products.findIndex((item)=>item.id === action.payload.id)
      if (item>=0 && item<=4) {
        state.products[item].quantity += 1;
        toast.info("Product Quantity increased!",{
          position:"top-left"
        })
      } else {   
        state.products.push({...action.payload, quantity:1})
        toast.success(`${action.payload.carName} added successfully!`,{
          position:"top-left"
        })
        // localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item)=>item.id !== action.payload.id);
      toast.error("Product Deleted Successfully!",{
        position:"top-left"
      })
    },
    resetCart: (state) => {
      state.products = [];
      toast.error("Empty Cart!",{
        position:"top-left"
      })
    },
    increaseQuantity:(state,action) => {
      const item = state.products.findIndex((item)=>item.id === action.payload.id)
      if(state.products[item].quantity < 4){
        state.products[item].quantity += 1;
      }else{
        state.products[item].quantity = 4;
      }
    },
    decreaseQuantity:(state, action) => {
      const item = state.products.findIndex((item)=>item.id === action.payload.id)
      if(state.products[item].quantity > 1){
        state.products[item].quantity -= 1;
      }else{
        state.products[item].quantity = 1;
      }
    },
    subTotal:(state) => {
      let {totalAmount, totalQuantity} = state.products.reduce((cartTotal, cartItem)=>{
           const {quantity, price} = cartItem;
           const itemTotal = quantity * price;
           cartTotal.totalAmount += itemTotal;
           cartTotal.totalQuantity += quantity;
           return cartTotal
      },{
         totalAmount: 0,
         totalQuantity: 0
      })
      state.totalAmount = parseInt(totalAmount.toFixed(2))
      state.totalQuantity = totalQuantity
    }
  },
})

export const { addToCart, removeFromCart, resetCart, increaseQuantity, decreaseQuantity, subTotal } = bookSlice.actions

export default bookSlice.reducer