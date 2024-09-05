import React from 'react'
import './style.scss'
import Logo from '../../assets/logo.svg'
import Discord from '../../assets/DiscordLogo.svg'
import Instagram from '../../assets/InstagramLogo.svg'
import Twitter from '../../assets/TwitterLogo.svg'
import Youtube from '../../assets/YoutubeLogo.svg'
import Email from '../../assets/weekly-btn.svg'

const Index = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_logo">
          <a href="./index.html"><img className="footer_logo_img" src={Logo} height={32} alt /></a>
          <p className="footer_logo_desc">NFT marketplace UI created with Anima for Figma.</p>
          <span className="footer_logo_join">Join our community</span>
          <div className="footer_logo_box">
            <a href="https://discover.com" target="_blank"><img src={Discord} alt /></a>
            <a href="https://youtube.com" target="_blank"><img src={Youtube} alt /></a>
            <a href="https://twitter.com" target="_blank"><img src={Twitter} alt /></a>
            <a href="https://instagram.com" target="_blank"><img src={Instagram} alt /></a>
          </div>
        </div>
        <div className="footer_explore">
          <h4 className="footer_explore_title">Explore</h4>
          <a href="#">Marketplace</a>
          <a href="#">Rankings</a>
          <a href="#">Connect a wallet</a>
          <div className="footer_explore_link">
          </div>
        </div>
        <div className="footer_weekly">
          <h3 className="footer_weekly_title">Join our weekly digest</h3>
          <p className="footer_weekly_desc">Get exclusive promotions &amp; updates straight to your inbox.</p>
          <form action className="email_form">
            <input className="email_input" type="text" placeholder="Enter Your Email Address" />
            <button className="email_btn">
              <img src={Email} alt />
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
      <p className="footer_desc">Ⓒ NFT Market. Use this template freely.</p>
    </div>

  )
}

export default Index