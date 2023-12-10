import React from 'react'
import { AiFillClockCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center h-[80px] bg-white px-20 xs:px-4'>
      <Link to="/">
    <div className='flex items-center text-2xl font-semibold text-orange-400 border-gray-700 border-2 p-[2px] cursor-pointer'>
<div className='bg-black text-white px-2'>CAR</div>
<div className='px-2'>DEKHO</div>
    </div>
      </Link>
    <div className='flex items-center xs:hidden'>
     <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
</svg></span>
    <div className=''>
        <h3 className='text-sm font-semibold'>Nepal</h3>
        <p className='text-[10px] font-semibold'>Koshi,Sunsari</p>
    </div>
    </div>
    <div className='flex items-center gap-1 xs:hidden'>
    <span><AiFillClockCircle /></span>
    <div>
        <h3 className='text-sm font-semibold'>Sun-Fri</h3>
        <p className='text-[10px] font-semibold'>10:00pm to 5:00pm</p>
    </div>
    </div>
    <div className='bg-blue-700 p-2 rounded-sm text-white'>
        <div className='flex items-center gap-2'><span><FaPhone /></span> Require a Call</div>
    </div>
    </div>
    </>
  )
}

export default Header