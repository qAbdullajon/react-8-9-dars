import React from 'react'
import './style.scss'
import Discover from '../../assets/discover.svg'
import Avatar from '../../assets/discover-avatar.svg'
import Eye from '../../assets/Eye.svg'

const Index = () => {
  return (
    <div className="miscover">
      <div className="miscover_info">
        <div className="miscover_text">
          <h1 className="miscover_title">Discover More NFTs</h1>
          <p className="miscover_desc">Explore new trending NFTs</p>
        </div>
        <a className="miscover_btn" href="./servise/artistPage/index.html">
          <img src={Eye} alt />
          <span>See All</span>
        </a>
      </div>
      <div className="miscover_box">
        <div className="miscover_item">
          <img src={Discover} alt />
          <div className="miscover_item_box">
            <h1>Distant Galaxy</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>MoonDancer</span>
            </p>
            <div className="miscover_item_price">
              <p className="misc_price">
                <span>Price</span>
                <span>Highest Bid</span>
              </p>
              <p className="misc_ETH">
                <span>1.63 ETH</span>
                <span>0.33 wETH</span>
              </p>
            </div>
          </div>
        </div>
        <div className="miscover_item">
          <img src={Discover} alt />
          <div className="miscover_item_box">
            <h1>Distant Galaxy</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>MoonDancer</span>
            </p>
            <div className="miscover_item_price">
              <p className="misc_price">
                <span>Price</span>
                <span>Highest Bid</span>
              </p>
              <p className="misc_ETH">
                <span>1.63 ETH</span>
                <span>0.33 wETH</span>
              </p>
            </div>
          </div>
        </div>
        <div className="miscover_item">
          <img src={Discover} alt />
          <div className="miscover_item_box">
            <h1>Distant Galaxy</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>MoonDancer</span>
            </p>
            <div className="miscover_item_price">
              <p className="misc_price">
                <span>Price</span>
                <span>Highest Bid</span>
              </p>
              <p className="misc_ETH">
                <span>1.63 ETH</span>
                <span>0.33 wETH</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="miscover_button">
        <a href="./servise/artistPage/index.html" className="miscover_btn">
          <img src={Eye} alt />
          <span>See All</span>
        </a>
      </div>
    </div>

  )
}

export default Index