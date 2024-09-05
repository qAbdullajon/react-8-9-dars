import React, { useEffect, useState } from 'react'
import './style.scss'
import Avatar from '../../assets/discover-avatar.svg'
import Eye from '../../assets/Eye.svg'

const Index = () => {
  const [date, setDate] = useState(new Date())
  const [hour, setHour] = useState(59)
  const [minute, setMinute] = useState(59)
  const [secund, setSecund] = useState(59)

  useEffect(() => {
    setInterval(() => {
      setSecund(new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds())
      setHour(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())
      setMinute(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
    }, 1000)
  }, [])

  return (
    <div className="magic">
      <div className="magic_info">
        <div className="magic_avatar">
          <img src={Avatar} alt />
          <span>Shroomie</span>
        </div>
        <h1>Magic Mashrooms</h1>
        <button className="magic_btn">
          <img src={Eye} alt />
          <span>See NFT</span>
        </button>
      </div>
      <div className="magic_time">
        <h4 className="magic_time_title">Auction ends in:</h4>
        <div className="magic_numbers">
          <div className="magic_num_hours">
            <h1 className="magic_hours">{hour}</h1>
            <span>Hours</span>
          </div>
          <div className="magic_num">
            <span>:</span>
          </div>
          <div className="magic_num_min">
            <h1 className="magic_min">{minute}</h1>
            <span>Minutes</span>
          </div>
          <div className="magic_num">
            <span>:</span>
          </div>
          <div className="magic_num_second">
            <h1 className="magic_second">{secund}</h1>
            <span>Seconds</span>
          </div>
        </div>
      </div>
      <button className="magic_btn">
        <img src={Eye} alt />
        <span>See NFT</span>
      </button>
    </div>

  )
}

export default Index