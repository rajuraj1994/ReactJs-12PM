import React from 'react'
import '../components/style.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Trending from '../components/Trending'

const HomePage = () => {
    return (
        <>
           <Navbar/> 
           <Carousel/>
           <Card/>
           <Trending/>
           <Footer/>
        </>
    )
}

export default HomePage
