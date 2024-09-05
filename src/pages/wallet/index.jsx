import React from 'react'
import './style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import ConnectWallet from '../../assets/WalletConnect.svg'
import Wallet1 from '../../assets/wallet1.svg'
import Wallet2 from '../../assets/wallet2.svg'
import Wallet3 from '../../assets/wallet3.svg'

const index = () => {
  return (
    <div className='bg-[#2b2b2b]'>
      <Header />
      <div className="createwallet">
        <div className="wallet_img">
          <img src={Wallet2} alt />
        </div>
        <div className="wallet_info">
          <h1 className="wallet_info_title">Connect Wallet</h1>
          <p className="wallet_info_desc">Choose a wallet you want to connect. There are several wallet providers.</p>
          <div className="create_Wallet-box">
            <a href="#" className="user_name_box">
              <h3 className="Wallet-box_title">Metamask</h3>
              <img src={Wallet1} alt />
            </a>
            <a href="#" className="user_email_box">
              <h3 className="Wallet-box_title">Wallet Connect</h3>
              <img src={ConnectWallet} alt />
            </a>
            <a href="#" className="user_password">
              <h3 className="Wallet-box_title">Coinbase</h3>
              <img src={Wallet3} alt />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default index