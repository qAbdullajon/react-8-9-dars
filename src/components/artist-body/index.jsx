import React from 'react'
import ArtistImg from '../../assets/discover.svg'
import Avatar from '../../assets/discover-avatar.svg'
import './style.scss'

const index = () => {
  return (
    <div className="artist_discover">
      <div className="discover_filter">
        <button className="filter_item">Created <span className="dn">302</span></button>
        <button className="filter_item">Owned <span className="dn">67</span></button>
        <button className="filter_item">Collection <span className="dn">4</span></button>
      </div>
      <div className="miscover_box">
        <div className="miscover_item">
          <img src={ArtistImg} alt />
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
          <img src={ArtistImg} alt />
          <div className="miscover_item_box">
            <h1>Life on Edena</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>NebulaKid</span>
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
          <img src={ArtistImg} alt />
          <div className="miscover_item_box">
            <h1>AstroFiction</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>Spaceone</span>
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
          <img src={ArtistImg} alt />
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
          <img src={ArtistImg} alt />
          <div className="miscover_item_box">
            <h1>Life on Edena</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>NebulaKid</span>
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
          <img src={ArtistImg} alt />
          <div className="miscover_item_box">
            <h1>AstroFiction</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>Spaceone</span>
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
          <img src={ArtistImg} alt />
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
          <img src={ArtistImg} alt />
          <div className="miscover_item_box">
            <h1>Life on Edena</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>NebulaKid</span>
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
          <img src={ArtistImg} alt />
          <div className="miscover_item_box">
            <h1>AstroFiction</h1>
            <p className="miscover_auther">
              <img src={Avatar} alt />
              <span>Spaceone</span>
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
    </div>
  )
}

export default index