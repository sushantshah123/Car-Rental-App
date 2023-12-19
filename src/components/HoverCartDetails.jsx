import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart, subTotal } from '../redux/bookSlice'
import { GiShoppingCart } from 'react-icons/gi'
import { IoTrashOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const HoverCartDetails = ({showCart, setShowCart}) => {
    const {products,quantity,totalAmount} = useSelector((state)=>state.book)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(subTotal())
     }, [products])
  return (

    <div className='absolute right-20 top-10 z-50 h-auto w-[300px] p-1 bg-gray-700' onMouseEnter={()=>setShowCart(true)} onMouseLeave={()=>setShowCart(false)}>
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
           <div className='flex flex-col gap-4 p-1'>
             {
                  products.map((item) => {
                  return(
                    <div className='flex justify-between items-center' key={item.id}>
                      <div className=''>
                      <img src={item.image} alt="" className='h-8 w-8'/>
                      <div className='text-xs'>{item.carName}</div>
                      </div>
                      <div className='text-xs'>${item.price}</div>
                      {/* <div className='flex w-1/5'>
                        <div className='border-[1px] border-black rounded-sm px-1 flex gap-3'>
                          <p className='cursor-pointer' onClick={()=>dispatch(increaseQuantity(item))}>+</p>
                          <span>{item.quantity}</span>
                          <p className='cursor-pointer'onClick={()=>dispatch(decreaseQuantity(item))}>-</p>
                        </div>
                      </div> */}
                      {/* <div className='w-1/5'>
                        Total: ${item.price * item.quantity}
                      </div> */}
                      <div className='cursor-pointer text-xs' onClick={()=>dispatch(removeFromCart(item))}>
                        <IoTrashOutline/>
                      </div>
                    </div>
                      )
                })
              }
             
           </div>
        )

      }
    </div>


  )
}

export default HoverCartDetails