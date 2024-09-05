import React from 'react'
import './style.scss'
import Works from '../../assets/works.svg'

const Index = () => {
  return (
    <section className="works">
      <div className="works_info">
        <h2 className="works_title">How it works</h2>
        <p className="works_desc">Find out how to get started</p>
      </div>
      <div className="works_box">
        <div className="works_item">
          <img src={Works} width={100} alt />
          <div className="works_item_box">
            <h3 className="works_item_title">Setup Your wallet</h3>
            <p className="works_item_desc">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
          </div>
        </div>
        <div className="works_item">
          <img src={Works} width={100} alt />
          <div className="works_item_box">
            <h3 className="works_item_title">Setup Your wallet</h3>
            <p className="works_item_desc">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
          </div>
        </div>
        <div className="works_item">
          <img src={Works} width={100} alt />
          <div className="works_item_box">
            <h3 className="works_item_title">Setup Your wallet</h3>
            <p className="works_item_desc">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Index