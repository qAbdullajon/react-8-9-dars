import React from 'react'
import './style.scss'
import ArtistImg from '../../assets/artist-hero.svg'
import ArtistAvatar from '../../assets/artist-avatar.svg'
import Copy from '../../assets/Copy.svg'
import Plus from '../../assets/Plus.svg'
import Global from '../../assets/Globe.svg'
import Discord from '../../assets/DiscordLogo.svg'
import Instagram from '../../assets/InstagramLogo.svg'
import Twitter from '../../assets/TwitterLogo.svg'
import Youtube from '../../assets/YoutubeLogo.svg'

const index = () => {
  return (
    <div>
      <div className="artistHero">
        <div className="artistHero_img">
          <img className="artist_hero_img" src={ArtistImg} alt />
          <div className="avatar_hero_box">
            <img className="artist_avatar" src={ArtistAvatar} alt />
          </div>
        </div>
      </div>
      <div className="animatic">
        <h1 className="animatic_title">Animakid</h1>
        <div className="animatic_box">
          <div className="animatic_btns">
            <button className="animatic_btns_copy">
              <img src={Copy} alt />
              <span>0xc0E3...B79C</span>
            </button>
            <button className="animatic_btns_follow">
              <img src={Plus} alt />
              <span>Follow</span>
            </button>
          </div>
          <div className="animatic_info">
            <div className="animatic_info_kbox">
              <div className="animatic_info_k">
                <h3>250k+</h3>
                <span>Volume</span>
              </div>
              <div className="animatic_info_k">
                <h3>50k+</h3>
                <span>NFTs Sold</span>
              </div>
              <div className="animatic_info_k">
                <h3>3000+</h3>
                <span>Followers</span>
              </div>
            </div>
            <div className="animatic_info_desc">
              <span>Bio</span>
              <p>The internet's friendliest designer kid.</p>
            </div>
            <div className="animatic_info_links">
              <span>Links</span>
              <div className="animatic_info_links_box">
                <a href="#"><img src={Global} alt /></a>
                <a href="#"><img src={Discord} alt /></a>
                <a href="#"><img src={Youtube} alt /></a>
                <a href="#"><img src={Twitter} alt /></a>
                <a href="#"><img src={Instagram} alt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index