import React from 'react'
import './style.scss'
import trending1 from '../../assets/trending1.svg'
import trending0 from '../../assets/trending0.svg'
import trending2 from '../../assets/trending2.svg'
import trending3 from '../../assets/trending3.svg'
import trending4 from '../../assets/trending4.svg'

const Index = () => {
  return (
    <div className='trending'>
      <div className="trending_text">
        <h1 className="trending_title">Trending Collection</h1>
        <p className="trending_desc">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="trending_box">
        <div className="trending_auther">
          <img src={trending0} alt />
          <div className="trending-imgs-box">
            <img src={trending1} alt />
            <img src={trending2} alt />
            <img src={trending3} alt />
          </div>
          <h3>DSGN Animals</h3>
          <p>
            <img src={trending4} alt />
            <span>MrFox</span>
          </p>
        </div>
        <div className="trending_auther">
          <img src={trending0} alt />
          <div className="trending-imgs-box">
            <img src={trending1} alt />
            <img src={trending2} alt />
            <img src={trending3} alt />
          </div>
          <h3>DSGN Animals</h3>
          <p>
            <img src={trending4} alt />
            <span>MrFox</span>
          </p>
        </div>
        <div className="trending_auther">
          <img src={trending0} alt />
          <div className="trending-imgs-box">
            <img src={trending1} alt />
            <img src={trending2} alt />
            <img src={trending3} alt />
          </div>
          <h3>DSGN Animals</h3>
          <p>
            <img src={trending4} alt />
            <span>MrFox</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Index