import React from 'react'
import AboutHeader from '../components/AboutHeader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const About = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <AboutHeader/>
        <Footer/>
    </div>
  )
}
