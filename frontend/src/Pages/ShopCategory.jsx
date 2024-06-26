import React, { useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { Items } from '../Components/Items/Items';
import dropdown_icon from '../Components/Assets/dropdown_logo.png';
import axios from 'axios';

export const ShopCategory = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-{products.length}</span> out of {products.length} products.
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcatogory-products'>
        {products.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={item.id} id={item.id} name={item.name} author={item.author} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
