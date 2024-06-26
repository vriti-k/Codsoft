import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { Breadcrum } from '../Components/Breadcrumbs/Breadcrum';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { productID } = useParams();
  const { all_product } = useContext(ShopContext);

  const product = all_product.find(item => item.id === parseInt(productID, 10));

  if (!product) {
    return <div>Product not found or loading...</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
