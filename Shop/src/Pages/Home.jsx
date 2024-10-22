import React from 'react'
import Hero from '../Components/Hero/Hero'
import Category1 from '../Components/Category1'
import Category2 from '../Components/Category2'
import LatestCollection from '../Components/LatestCollection'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category1/>
      <Category2/>
      <LatestCollection/>
    </div>
  )
}

export default Home
