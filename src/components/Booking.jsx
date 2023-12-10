import React from 'react'

const Booking = () => {
  return (
    <>
    <div className='md:px-20 sm:px-0 w-full h-[200px] flex'>
        <div className='md:w-1/3 xs:w-full xs:px-4 xs:hidden'>
            <div className='booking_image w-full overflow-hidden h-full border-[4px] border-orange-400'>
            {/* <img src="./images/offer-toyota.png" alt="" className='w-full h-full overflow-hidden'/> */}
            </div>
            {/* <h3 className='absolute top-[40%] left-[20%] text-teal-400 font-semibold sm:text-xl md:text-2xl text-justify'>Search your Best <br /> Cars here</h3> */}
        </div>
        <div className='md:w-2/3 sm:w-full bg-slate-100 p-5 grid md:grid-cols-3 sm:grid-cols-1 gap-4 xs:w-full'>
            <input type="text" placeholder='From Address' required className=' px-2 sm:py-1  outline-none border-[1px] border-gray-300'/>
            <input type="text" placeholder='To Address' required className=' px-2 sm:py-1  outline-none border-[1px] border-gray-300'/>
            <input type="date" placeholder='Journey Date' required className=' px-2 sm:py-1  outline-none border-[1px] border-gray-300'/>
            <input type="time" placeholder='Journey Time' required className=' px-2 sm:py-1  outline-none border-[1px] border-gray-300'/>
            <select className=' px-2 sm:py-1  outline-none border-[1px] border-gray-300'>
                <option value="ac">AC Car</option>
                <option value="non-ac">Non-AC Car</option>
            </select>
            <button type='button' className=' px-2 sm:py-1  bg-blue-700 text-white'>Find Car</button>
        </div>
    </div>
    </>
  )
}

export default Booking