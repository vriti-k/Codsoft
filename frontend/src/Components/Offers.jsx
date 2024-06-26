import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpg'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>Only on Best Sellers Product</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""/>
        </div>
    </div>
  )
}
