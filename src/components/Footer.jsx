import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col gap-8 bg-orange-600 px-20 xs:px-4 py-5 text-white'>
      <div className='flex justify-around items-start xs:flex-col xs:gap-3'>
      <div className='w-1/3 flex flex-col gap-2'>
        {/* <div><span>logo</span> CarDekho.com</div> */}
        <div className='flex items-center text-2xl font-semibold text-orange-400 border-gray-700 border-2 p-[2px] w-[50%] cursor-pointer'>
          <div className='bg-black text-white px-2'>CAR</div>
          <div className='px-2'>DEKHO</div>
        </div>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quas, quibusdam debitis dolores, eligendi doloribus atque magni libero cum,
          eaque assumenda dicta nisi est.</p>
    </div>

    <div className='w-1/6'>
        <h3>Quick Links</h3>
        <div className='flex flex-col gap-2'>
            <p className='text-xs cursor-pointer'>About Us</p>
            <p className='text-xs cursor-pointer'>Oue Services</p>
            <p className='text-xs cursor-pointer'>Privacy Policy</p>
            <p className='text-xs cursor-pointer'>Contact Us</p>
        </div>
    </div>
    
    <div className='w-1/6'>
        <h3>Our Office</h3>
        <div className='flex flex-col gap-2'>
            <p className='text-xs cursor-pointer'>About Us</p>
            <p className='text-xs cursor-pointer'>Oue Services</p>
            <p className='text-xs cursor-pointer'>Privacy Policy</p>
            <p className='text-xs cursor-pointer'>Contact Us</p>
        </div>
    </div>

    <div className='w-1/6 flex flex-col gap-2'>
        <h4>Newsletter</h4>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur</p>
        <input type="text" placeholder='Subscribe'className='px-1 rounded-sm'/>
    </div>
    </div>

    <div className='text-center text-sm font-medium'>Copyright 2023, Designed by <span className='text-amber-300'> Sushant Shah. </span> All Rights Reserved.</div>
    </div>
    </>
  )
}

export default Footer