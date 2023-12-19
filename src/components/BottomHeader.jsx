import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import HoverCartDetails from './HoverCartDetails';

const BottomHeader = () => {
  const[showCart, setShowCart] = useState(false)
  const products = useSelector((state)=>state.book.products)
  return (
    <>
    <div className='h-[50px] flex justify-between items-center bg-orange-500 text-white px-20 xs:px-4 relative'>
        <div className='flex gap-4'>
            <Link to="/"><p className='cursor-pointer '>Home</p></Link>
            <Link to="/about"><p className='cursor-pointer '>About</p></Link>
            <Link to="/cars"><p className='cursor-pointer '>Cars</p></Link>
            <Link to="/blog"><p className='cursor-pointer '>Blog</p></Link>
            <Link to="/contact"><p className='cursor-pointer '>Contact</p></Link>
        </div>
        <div className='bg-gray-300 p-1 rounded-sm xs:hidden flex items-center'>
            <input type="search" placeholder='Search...' className='px-2 rounded-sm outline-0 bg-gray-300'/>
            <span className='text-black'><FaSearch /></span>
        </div>
        <Link to="/cart">
        <div className='flex items-center relative' onMouseEnter={()=>setShowCart(true)} onMouseLeave={()=>setShowCart(false)}>
        <FaShoppingCart /> <span className='absolute text-xs top-[-10px] right-[-10px] bg-red-600 h-2 w-2 flex items-center justify-center rounded-full p-2'>{products.length}</span>
        </div>
        </Link>
        {
          showCart ? 
          <HoverCartDetails showCart={showCart} setShowCart={setShowCart}/>
          : ""
        }
    </div>
    </>
  )
}

export default BottomHeader