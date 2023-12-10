import React from 'react'
import { useParams } from 'react-router-dom'
import carData from '../assets/data/carData'

const SingleCarItem = () => {
    const {id} = useParams()
    const car = carData.find((car)=>car.id === parseInt(id, 10))
    const {imgUrl, carName, price, model, gps, speed, seatType, automatic} = car;

    if (!car) {
      console.log("Car not found")
      return <div>Car not found</div>;
    }
  return (
    <>
        <div className='w-full px-20 flex flex-col md:flex-row md:justify-center gap-5'>   
                         <img src={imgUrl} alt="" className='flex-1'/>
                         <div className='flex flex-col flex-1 gap-3 items-start'>
                         <h2 className='text-center text-blue-500 font-medium'>{carName}</h2>
                         <h4 className='text-[13px] font-semibold text-center'>${price}.00 / Day</h4>
                         <div className='flex flex-col items-center'>
                            <p className='text-[11px]'><span>logo</span>{model}</p>
                            <p className='text-[11px]'><span>logo</span>{gps}</p>
                            <p className='text-[11px]'><span>logo</span>{speed}</p>
                         </div>
                            <button className='w-1/2 bg-blue-600 text-white text-xs py-[3px] rounded-sm'>RENT</button>
                      </div>
         </div> 

    </>
  )
}

export default SingleCarItem