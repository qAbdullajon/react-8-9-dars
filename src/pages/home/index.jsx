import React from 'react'
import Header from '../../components/header'
import Hero from '../../components/hero'
import Trending from '../../components/trending'
import Creators from '../../components/creators'
import Browse from '../../components/browse'
import Discover from '../../components/discover'
import Magic from '../../components/magic'
import Works from '../../components/works'
import Weekly from '../../components/weekly'
import Footer from '../../components/footer'

const Index = () => {
  return (
    <div className='bg-[#2B2B2B]'>
      <Header />
      <Hero />
      <Trending />
      <Creators />
      <Browse />
      <Discover />
      <Magic />
      <Works />
      <Weekly />
      <Footer />
    </div>
  )
}

export default Index