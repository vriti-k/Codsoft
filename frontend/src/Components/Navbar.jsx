import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    
    const[menu,setMenu] = useState("shop");
    const{getTotalCartItems}= useContext(ShopContext);

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>KnownPages</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("fictional")}}><Link style={{textDecoration:'none'}} to='/fictional'>Fictional</Link>{menu==="fictional"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("nonfictional")}}><Link style={{textDecoration:'none'}} to='/nonfictional'>Non-fictional</Link>{menu==="nonfictional"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("romance")}}><Link style={{textDecoration:'none'}} to='/romance'>Romance</Link>{menu==="romance"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar