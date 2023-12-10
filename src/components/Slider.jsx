import React, { useState,useEffect } from 'react'
import Booking from "./Booking"
const items = [
  {id:1,title:"Reserved Now & get 50% Off!",img:"./slider-img/slider-1.jpg"},
  {id:2,title:"Reserved Now & get 50% Off!",img:"./slider-img/slider-2.jpg"},
  {id:3,title:"Reserved Now & get 50% Off!",img:"./slider-img/slider-3.jpg"},

];

const Slider = () => {
  const [slide,setSlide] = useState(0)
  useEffect(() => {  
    const interval = setInterval(()=>{
       setSlide((prev)=>prev === items.length-1 ? 0 : prev+1)
    },4000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className='relative w-full'>
    <div className='flex flex-col md:flex-row w-full h-[70vh] xs:h-[50vh] relative'>
        {/* LEFT  */}
        <div className='flex-1 bg-transparent md:h-full flex flex-col justify-center items-start px-20 gap-4 overflow-hidden absolute xs:top-5'>
          <p className='text-white'>For Rent $100 Per Day</p>
          <h1 className=' text-4xl space-x-1 text-center font-semibold text-yellow-300'>{items[slide].title}</h1>
          <button className='bg-blue-600 text-white p-2 rounded-sm hover:scale-105'>Reserve Now</button>
        </div>
        {/* RIGHT  */}
        <div className='flex-1 md:h-full'>
          <img src={items[slide].img} alt="" className='h-full w-full object-cover'/>
        </div>
    </div>
    <div className='absolute bottom-[-100px] w-full'>
        <Booking/>
    </div>
    </div>

  )
}

export default Slider