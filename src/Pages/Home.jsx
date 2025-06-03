import React, { useState } from 'react'
import Hero from '../Components/Hero'
import Category1 from '../Components/Category1'
import Category2 from '../Components/Category2'
import LatestCollection from '../Components/LatestCollection'
import Banner from '../Components/Banner'
import BestSellers from '../Components/BestSellers'
import Banner2 from '../Components/Banner2'
import OurPolicy from '../Components/OurPolicy'
import Subscribe from '../Components/Subscribe'



const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  return (
    <div>
      <Hero onCategorySelect={setCategoryFilter} />
      <Category1 categoryFilter={categoryFilter} />
      <Category2 categoryFilter={categoryFilter} />
      <OurPolicy />
      <Banner />
      <LatestCollection />
      <BestSellers />
      <Banner2 />
      <Subscribe />
      {/* <RegisrationPage/> */}
     

    </div>
  )
}

export default HomePage;
