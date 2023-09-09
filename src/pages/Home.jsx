import React from 'react'
import Navbar from '../components/Navbar'
import  Announcement  from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Partner from '../components/Partner'
import Info from '../components/Info'
import Advert from '../components/Advert'
import Brand from '../components/BRAND/Brand'




const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      {/* <Partner/> */}
      <Brand/>
      <Advert/>
      <Categories/>
      <Info/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home