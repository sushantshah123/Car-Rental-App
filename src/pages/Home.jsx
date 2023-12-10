import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import Slider from '../components/Slider'
import AboutUs from '../components/AboutUs'
import PopularServices from '../components/PopularServices'
import Footer from '../components/Footer'
import HotOffers from '../components/HotOffers'

const Home = () => {
  return (
    <>
    <TopHeader/>
    <Header/>
    <BottomHeader/>
    <Slider/>
    <AboutUs/>
    <PopularServices/>
    <HotOffers/>
    <Footer/>
    </>
  )
}

export default Home