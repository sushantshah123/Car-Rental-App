import React from 'react'
import membersData from '../assets/data/MembersData'

const Members = () => {
  return (
    <>
    
      <div className='popular_services w-full h-auto flex flex-col gap-4 px-20 py-10'>
        <h3 className='text-red-600 text-2xl font-medium'>Our Members</h3>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
    {
        membersData.map((item) => {
            return(
              <div key={item.id} className='text-black border-[1px] p-2 bg-blue-100 hover:bg-slate-300 group duration-500'>
                 <div className='relative'>
                <img src={item.imgUrl} alt="" />
                <div className='absolute group-hover:flex justify-between items-center px-5 hidden h-0 w-0 group-hover:w-full group-hover:h-full top-0 group-hover:bg-opacity-40'>
                <p className='text-red-500 cursor-pointer'>{<item.icon1/>}</p>
                <p className='text-red-500 cursor-pointer'>{<item.icon2/>}</p>
                <p className='text-red-500 cursor-pointer'>{<item.icon3/>}</p>
                </div>
                </div>
                <h2 className='font-medium text-red-500'>{item.name}</h2>
                <p className='text-[10px]'>{item.experience}</p>
              </div>
              )
        })
    }
          </div>
    </div>
    </>
  )
}

export default Members