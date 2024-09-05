import React from 'react'
import HeroImg from '../../assets/hero-img.svg'
import Avatar from '../../assets/Avatar.svg'
import Rocket from '../../assets/RocketLaunch.svg'

const Index = () => {
  return (
    <div className='grid px-[5%] py-10 gap-10 md:grid-cols-2 md:py-20'>
      <div>
        <h2 className='text-[28px] font-semibold pb-2.5 md:text-4xl'>Discover digital art & Collect NFTs</h2>
        <p className='text-base'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
      </div>
      <div className='bg-[#3B3B3B] rounded-[25px] md:row-start-1 md:row-end-3 md:col-start-2'>
        <img className='w-full' src={HeroImg} alt="" />
        <div className='p-4'>
          <h4 className='text-[22px] font-semibold'>Space Walking</h4>
          <div className='flex gap-3 items-center pt-2.5'>
            <img src={Avatar} alt="" />
            <p>Animakid</p>
          </div>
        </div>
      </div>
      <div>
        <button className='flex gap-3 items-center justify-center rounded-[20px] font-semibold text-base bg-[#A259FF] w-full py-4 max-w-[350px]'>
          <img src={Rocket} alt="" />
          <span>Get Started</span>
        </button>
        <div className='flex justify-between pt-10 max-w-[400px]'>
          <div>
            <h2 className='text-[22px] font-bold'>240k+ </h2>
            <h3>Total Sale</h3>
          </div>
          <div>
            <h2 className='text-[22px] font-bold'>100k+ </h2>
            <h3>Auctions</h3>
          </div>
          <div>
            <h2 className='text-[22px] font-bold'>240k+ </h2>
            <h3>Artists</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index