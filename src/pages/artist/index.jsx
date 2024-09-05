import React from 'react'
import Header from '../../components/header'
import ArtistHero from '../../components/artist-hero'
import ArtistBody from '../../components/artist-body'
import Footer from '../../components/footer'

const index = () => {
  return (
    <div className='bg-[#2b2b2b]'>
      <Header />
      <ArtistHero />
      <ArtistBody />
      <Footer />
    </div>
  )
}

export default index