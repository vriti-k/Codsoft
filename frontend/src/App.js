import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import fictional_banner from './Components/Assets/fictional_banner.jpeg';
import nonfictional_banner from './Components/Assets/nonfictional_banner.jpg';
import romance_banner from './Components/Assets/romance_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/fictional' element={<ShopCategory banner={fictional_banner} category="fictional" />} />
          <Route path='/nonfictional' element={<ShopCategory banner={nonfictional_banner} category="non-fictional" />} />
          <Route path='/romance' element={<ShopCategory banner={romance_banner} category="romance" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
