// ProductDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state; // Destructure product from the state

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

  return (
    <div style={{ padding: '20px' }}>
      <img src={product.imgUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Old Price: ${product.oldPrice}</p>
      <p>New Price: ${product.newPrice}</p>
    </div>
  );
};

export default ProductDetails;
