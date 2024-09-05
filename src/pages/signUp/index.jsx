import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './style.scss'
import SignUp from '../../assets/sign-up.svg'
import User from '../../assets/sign-up-user.svg'
import Email from '../../assets/sign-up-email.svg'
import Key from '../../assets/LockKey.svg'

const Index = () => {
  return (
    <div className='bg-[#2B2B2B]'>
      <Header />
      <div className="createAccount">
        <div className="account_img">
          <img src={SignUp} alt />
        </div>
        <div className="account_info">
          <h1 className="account_info_title">Create account</h1>
          <p className="account_info_desc">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          <form action className="create_Account-form">
            <div className="user_name_box">
              <input type="text" placeholder="Username" />
              <img src={User} alt />
            </div>
            <div className="user_email_box">
              <input type="email" placeholder="Email Address" />
              <img src={Email} alt />
            </div>
            <div className="user_password">
              <input type="password" placeholder="Password" />
              <img src={Key} alt />
            </div>
            <div className="confirum_passw">
              <input type="password" placeholder="Confirm Password" />
              <img src={Key} alt />
            </div>
            <a href="../connectWallet/index.html" className="account_btn">Create account</a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index