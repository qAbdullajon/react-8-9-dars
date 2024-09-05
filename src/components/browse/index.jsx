import React from 'react'
import './style.scss'
import Browse from '../../assets/browse.svg'
import Hover from '../../assets/browse-hover.svg'

const Index = () => {
  return (
    <div className="browse">
      <h1 className="browse_title">Browse Categories</h1>
      <div className="browse_box">
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Art</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Collectibles</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Music</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Photography</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt width={80} />
            </div>
          </div>
          <h3 className="browse_item_desc">Video</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Utility</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Sport</h3>
        </div>
        <div className="browse_item">
          <div className="browse_item_imgs">
            <img src={Browse} alt className="asosiy" />
            <div className="hover_img">
              <img src={Hover} alt width={80} className="hover" />
            </div>
          </div>
          <h3 className="browse_item_desc">Virtual Worlds</h3>
        </div>
      </div>
    </div>

  )
}

export default Index