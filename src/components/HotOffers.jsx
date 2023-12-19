import React, { useState } from 'react'
import { BsSpeedometer } from "react-icons/bs";
import { GiGps } from "react-icons/gi";
import { IoCarOutline } from "react-icons/io5";
import carData from '../assets/data/carData'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/bookSlice'
import { useDispatch, useSelector } from "react-redux"
import Pagination from './Pagination';

  const HotOffers = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.book.products)

      //searching
      const [search, setSearch] = useState("")
      // filtering 
      const [category, setCategory] = useState("all")
  
      const filteredData = category === "all" ? carData : carData.filter((item)=>item.category === category)

     // pagination 
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(2)
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);
  
  return (
    <>
    <div className='w-full h-auto flex flex-col gap-4 px-20 xs:px-4 py-10'>
        <h3 className='text-red-600 text-2xl font-medium'>Hot Offers</h3>
        <div className='py-5 flex justify-between'>
      <form action="" className='w-1/2'>
      <input type="search" placeholder='search 1000+ cars' className='px-2 py-1 border-gray-600 border-2 w-1/2 xs:w-full sm:w-full rounded-full' onChange={(e) => setSearch(e.target.value)} />
      </form>
      <select className='w-[100px] border-2 border-black' onChange={(e)=>setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="toyota">Toyota</option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
      </select>
      </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>

            {
                currentPosts.filter((item)=>{
        return search.toLocaleLowerCase() === "" ? item : item.carName.toLocaleLowerCase().includes(search)
      }).map((item) => {
                    return(
                        <div key={item.id} className='text-black bg-slate-200 sm:w-full border-[1px] p-4 shadow-md flex flex-col gap-2'>
                         <img src={item.imgUrl} alt="" />
                         <h2 className='text-center text-blue-500 font-medium'>{item.carName}</h2>
                         <h4 className='text-[13px] font-semibold text-center'>${item.price}.00 / Day</h4>
                         <div className='flex justify-between items-center'>
                            <p className='text-[11px] flex items-center gap-1'><span><IoCarOutline/></span>{item.model}</p>
                            <p className='text-[11px] flex items-center gap-1'><span><GiGps/></span>{item.gps}</p>
                            <p className='text-[11px] flex items-center gap-1'><span><BsSpeedometer/></span>{item.speed}</p>
                         </div>
                         <div className=''>
                            <button className='w-1/2 bg-blue-600 text-white text-xs py-[3px] rounded-sm' onClick={() => dispatch(addToCart({
                              id:item.id,
                              carName:item.carName,
                              price:item.price,
                              image:item.imgUrl,
                            }))}>RENT</button>
                            <Link to={`/singlecar/${item.id}`}>
                            <button className='w-1/2 bg-gray-600 text-white text-xs py-[3px] rounded-sm'>DETAILS</button>
                            </Link>
                         </div>
                      </div>
                    )
                })
            }
        </div>
        <Pagination totalPosts={filteredData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPosts={currentPosts} currentPage={currentPage}/>
    </div>
    </>
  )
}

export default HotOffers
