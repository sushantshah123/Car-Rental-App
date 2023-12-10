import React from 'react'
import carData from '../assets/data/carData'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/bookSlice'
import { useDispatch, useSelector } from "react-redux"

  const HotOffers = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.book.products)
  return (
    <>
    <div className='w-full h-auto flex flex-col gap-4 px-20 xs:px-4 py-10'>
        <h3 className='text-red-600 text-2xl font-medium'>Hot Offers</h3>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>

            {
                carData.map((item) => {
                    return(
                        <div key={item.id} className='text-black bg-slate-200 sm:w-full border-[1px] p-4 shadow-md flex flex-col gap-2'>
                         <img src={item.imgUrl} alt="" />
                         <h2 className='text-center text-blue-500 font-medium'>{item.carName}</h2>
                         <h4 className='text-[13px] font-semibold text-center'>${item.price}.00 / Day</h4>
                         <div className='flex justify-between items-center'>
                            <p className='text-[11px]'><span>logo</span>{item.model}</p>
                            <p className='text-[11px]'><span>logo</span>{item.gps}</p>
                            <p className='text-[11px]'><span>logo</span>{item.speed}</p>
                         </div>
                         <div className=''>
                            <button className='w-1/2 bg-blue-600 text-white text-xs py-[3px] rounded-sm' onClick={() => dispatch(addToCart({
                              id:item.id,
                              carName:item.carName,
                              price:item.price,
                              image:item.imgUrl,
                            }))}>RENT</button>
                            <Link to={`/singlecar/${item.id}`}>
                            <button className='w-1/2 bg-gray-600 text-white text-xs py-[3px] rounded-sm'>DETAILS</button>
                            </Link>
                         </div>
                      </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default HotOffers
