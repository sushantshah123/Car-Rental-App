import React from 'react'
import { FaPhone } from 'react-icons/fa'

const TopHeader = () => {
  return (
    <>
    <div className="h-[30px] flex justify-between items-center bg-orange-500 text-white px-20 xs:px-4 text-[13px]">
        <div className="flex gap-4">
            <h4>Need Help?</h4>
            <h4 className='flex justify-center items-center gap-1'><span><FaPhone /></span>Call :9812923455</h4>
        </div>
        <div className='flex gap-4'>
            <div className='cursor-pointer'>Login</div>
            <div className='cursor-pointer'>Register</div>
        </div>
    </div>
    </>
  )
}

export default TopHeader