import React from 'react'

const SingleCarItemSkeleton = () => {
  return (
     <div className='w-full h-[250px] px-20 flex flex-col md:flex-row md:justify-center gap-5 py-4'>  
                       <div className='h-full w-1/2 bg-gray-400 animate-pulse rounded-sm flex justify-center items-center'>
                         <img src="https://cdn-icons-png.flaticon.com/512/29/29495.png" alt="" className='h-[40px] w-[40px] bg-gray-400 animate-pulse' />
                        </div> 
                         <div className='flex flex-col flex-1 gap-3 items-start'>
                         <h2 className='text-center text-blue-500 font-medium h-5 w-1/2 bg-gray-400 rounded-full animate-pulse'></h2>
                         <h4 className='text-[13px] font-semibold text-center h-4 w-1/2 bg-gray-400 rounded-full animate-pulse'></h4>
                         <div className='flex flex-col justify-center gap-1'>
                            <div className='flex gap-1'>
                            <span className='h-3 w-3 rounded-full bg-gray-400 animate-pulse'></span>
                            <p className='text-[11px] flex items-center gap-1 bg-gray-400 h-3 w-[100px] rounded-full'></p>
                            </div>
                            <div className='flex gap-1'>
                            <span className='h-3 w-3 rounded-full bg-gray-400 animate-pulse'></span>
                            <p className='text-[11px] flex items-center gap-1 bg-gray-400 h-3 w-[100px] rounded-full'></p>
                            </div>
                            <div className='flex gap-1'>
                            <span className='h-3 w-3 rounded-full bg-gray-400 animate-pulse'></span>
                            <p className='text-[11px] flex items-center gap-1 bg-gray-400 h-3 w-[100px] rounded-full'></p>
                            </div>
                         </div>
                            <button className='w-1/2 text-white text-xs py-[3px] bg-gray-400 animate-pulse h-4 rounded-full'
                            ></button>
                      </div>
         </div>  
  )
}

export default SingleCarItemSkeleton