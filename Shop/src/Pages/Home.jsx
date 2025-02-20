import React from 'react'
import Hero from '../Components/Hero/Hero'
import Category1 from '../Components/Category1'
import Category2 from '../Components/Category2'
import LatestCollection from '../Components/LatestCollection'
import Banner from '../Components/Banner'
import BestSellers from '../Components/BestSellers'
import Banner2 from '../Components/Banner2'
import OurPolicy from '../Components/OurPolicy'
import Subscribe from '../Components/Subscribe'


const Home = () => {
  return (
    <div>
      <Hero />
      <Category1/>
      <Category2/>
      <OurPolicy/>
      <Banner/>
      <LatestCollection/>
      <BestSellers/>
      <Banner2/>
      <Subscribe/>
     

    </div>
  )
}

export default Home
