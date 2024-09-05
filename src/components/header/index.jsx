import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import MenuImg from '../../assets/nav-menu.svg'
import user from '../../assets/user-icon.svg'

const Index = () => {
  return (
    <div className='px-[5%] py-4  lg:px-[3%] flex justify-between items-center'>
      <div>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className='flex items-center gap-3'>
        <div className='hidden md:flex'>
          <NavLink to="/artist" className={`text-lg px-2 py-2 font-semibold text-white`}>Artitst</NavLink>
          <NavLink className={`text-lg px-2 py-2 font-semibold text-white`}>Rankings</NavLink>
          <NavLink to='/connect-wallet' className={`text-lg px-2 py-2 font-semibold text-white`}>Connect a wallet</NavLink>
        </div>
        <button className='block min-[860px]:hidden'>
          <img src={MenuImg} alt="" />
        </button>
        <NavLink to="/sign-up" className={`hidden min-[860px]:flex items-center gap-3 text-lg font-semibold text-white bg-[#A259FF] rounded-[20px] py-4 px-7`}>
          <img src={user} alt="" />
          <span>Sign Up</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Index