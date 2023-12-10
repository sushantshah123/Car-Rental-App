import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Members from '../components/Members'

const About = () => {
  return (
    <>
    <TopHeader/>
    <Header/>
    <BottomHeader/>
    <div className='text-red-600 text-2xl font-medium text-center'>About Us</div>
    <AboutUs/>
    <Members/>
    <Footer/>
    </>
  )
}

export default About