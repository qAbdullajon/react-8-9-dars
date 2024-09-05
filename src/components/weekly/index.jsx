import React from 'react'
import './style.scss'
import Weekly from '../../assets/weekly.svg'
import WeeklyBtn from '../../assets/weekly-btn.svg'

const index = () => {
  return (
    <div className="weekly">
      <img src={Weekly} alt />
      <div className="email">
        <div className="weekly_info">
          <h1 className="weekly_title">Join our weekly digest</h1>
          <p className="weekly_desc">Get exclusive promotions &amp; updates straight to your inbox.</p>
        </div>
        <form action className="email_form">
          <input className="email_input" type="text" placeholder="Enter Your Email Address" />
          <button className="email_btn">
            <img src={WeeklyBtn} alt />
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>

  )
}

export default index