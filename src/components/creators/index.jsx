import React from 'react'
import './style.scss'
import Creators from '../../assets/creators.svg'
import Rocket from '../../assets/RocketLaunch.svg'

const Index = () => {
  return (
    <div className="creators">
      <div className="creators_info">
        <div className="creators_text">
          <h1 className="creators_title">Top creators</h1>
          <p className="creators_desc">
            Checkout Top Rated Creators on thes NFT Marketplace
          </p>
        </div>
        <button className="creators_btn btn dn">
          <img src={Rocket} alt />
          <span>View Rankings</span>
        </button>
      </div>
      <div className="creators_box">
        <div className="creators_item">
          <span className="namber">1</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">2</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">3</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">4</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">5</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">6</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">7</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">8</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">9</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">10</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">11</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <div className="creators_item">
          <span className="namber">12</span>
          <img src={Creators} alt width={60} className="avatar" />
          <div className="avatar_info">
            <h3>Keepitreal</h3>
            <p>Total Sales: <span>34.53 ETH</span></p>
          </div>
        </div>
        <button className="creators_btn btn">
          <img src={Rocket} alt />
          <span>View Rankings</span>
        </button>
      </div>
    </div>

  )
}

export default Index