import React from 'react'
import "./Breadcrum.css"
import arrow_icon from '../Assets/arrow_icon.png'

export const Breadcrum = (props) => {
    const {product} = props;
    // Check if product is undefined or null
    if (!product) {
      return <div className='breadcrum'>Product not found</div>;
    }
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt=""/> {product.name}
    </div>
  )
}
