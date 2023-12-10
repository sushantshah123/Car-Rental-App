import React from 'react'
import serviceData from '../assets/data/serviceData'
const PopularServices = () => {
  return (
    <>
    <div className='popular_services w-full h-auto flex flex-col gap-4 px-20 xs:px-4 py-10'>
        <h3 className='text-red-600 text-2xl font-medium'>Popular Services</h3>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 shadow-sm'>
           {
              serviceData.map((item) => {
                return(
              <div key={item.id} className='text-black border-[1px] p-2 bg-blue-100 hover:bg-slate-300'>
                <p className='text-black'>{item.icon}</p>
                <h2 className='font-medium text-red-500'>{item.title}</h2>
                <p className='text-[10px]'>{item.desc}</p>
              </div>
                )
               })
            }
          </div>
    </div>
    </>
  )
}

export default PopularServices