import React from 'react'
import { FaCar, FaMotorcycle } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { SiYamahamotorcorporation } from "react-icons/si";

const AboutUs = () => {
  return (
    <>
    <div className='w-full flex sm:flex-col md:flex-row md:gap-4 md:px-20 xs:px-4 xs:flex-col px-5 py-10 mt-[100px]'>
       <div className='md:w-1/2 w-full flex flex-col gap-4'>
         <h5 className='text-yellow-300'>About Us</h5>
         <h3 className='text-red-600 text-2xl font-medium'>Welcome to Car Rent Service</h3>
         <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quisquam excepturi voluptate, ratione accusantium totam vero perspiciatis nisi, quibusdam sint dolore doloremque! Veritatis quas quia debitis corrupti quisquam iure! Enim.</p>
         <div className='flex gap-4 w-full flex-wrap'>
            <p className='w-1/3 text-xs flex items-center gap-1'><span><IoSettingsOutline /></span> loream ipsum dolor jonu</p>
            <p className='w-1/3 text-xs flex items-center gap-1'><span><FaCar /></span> loream ipsum dolor jonu</p>
            <p className='w-1/3 text-xs flex items-center gap-1'><span><SiYamahamotorcorporation /></span> loream ipsum dolor jonu</p>
            <p className='w-1/3 text-xs flex items-center gap-1'><span><FaMotorcycle /></span> loream ipsum dolor jonu</p>
         </div>
       </div>
       <div className='md:w-1/2 w-full overflow-hidden h-full'>
         <img src="./images/nissan-offer.png" alt="" />
       </div>
    </div>
    </>
  )
}

export default AboutUs