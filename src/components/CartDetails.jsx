import React, { useEffect } from 'react'
import { GiShoppingCart, GiTrashCan } from "react-icons/gi";
import {useSelector, useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart, resetCart, subTotal } from '../redux/bookSlice';

const CartDetails = () => {
    const {products,quantity,totalAmount} = useSelector((state)=>state.book)
    const dispatch = useDispatch()
    
     useEffect(() => {
       dispatch(subTotal())
    }, [products])
    
  return (
    <div className='cart py-10'>
      {
        products.length === 0 ? (
          <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='text-black text-3xl'>Your Cart is Empty!</div>
        <span className='font-medium text-[100px] opacity-50'><GiShoppingCart /></span>
        <Link to="/">
        <div className='border-[1px] border-gray-600 rounder-sm p-2'>Let's go for Shopping</div>
        </Link>
          </div>
        ) : 

        (
           <div className='flex flex-col gap-4 px-20 xs:px-4'>
             {
                  products.map((item) => {
                  return(
                    <div className='flex items-center' key={item.id}>
                      <div className='w-2/5'>
                      <img src={item.image} alt="" className='h-8 w-8'/>
                      <div>{item.carName}</div>
                      </div>
                      <div className='w-1/5'>${item.price}</div>
                      <div className='flex w-1/5'>
                        <div className='border-[1px] border-black rounded-sm px-1 flex gap-3'>
                          <p className='cursor-pointer' onClick={()=>dispatch(increaseQuantity(item))}>+</p>
                          <span>{item.quantity}</span>
                          <p className='cursor-pointer'onClick={()=>dispatch(decreaseQuantity(item))}>-</p>
                        </div>
                      </div>
                      <div className='w-1/5'>
                        Total: ${item.price * item.quantity}
                      </div>
                      <div className='cursor-pointer' onClick={()=>dispatch(removeFromCart(item))}>
                        <GiTrashCan/>
                      </div>
                    </div>
                      )
                })
              }
              <hr  className='w-[80%] border-[1px]  border-gray-300 mx-auto my-2'/>
              <div className='flex justify-between items-start'>

              <div className='border-[1px] border-gray-600 rounder-sm p-2 cursor-pointer' onClick={()=>dispatch(resetCart())}>Clear Cart</div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-2xl font-medium'>Subtotal</p>
                  <span>${totalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
              <div className='border-[1px] border-gray-600 rounder-sm p-2'>Check out</div>
                <div className='border-[1px] border-gray-600 rounder-sm p-2'>Shop More</div>
              </div>
              </div>
           </div>
        )

      }
    </div>
  )
}

export default CartDetails