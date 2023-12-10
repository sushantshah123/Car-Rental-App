import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartDetails from "../components/CartDetails"
import BottomHeader from '../components/BottomHeader'

const Cart = () => {
  return (
    <>
    <TopHeader/>
    <Header/>
    <BottomHeader/>
    <CartDetails/>
    <Footer/>
    </>
  )
}

export default Cart