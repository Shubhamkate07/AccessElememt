// ProductList.js
import React from 'react';
import { productDetails } from './data'; // Import the product data
import Item from './Item'; // Import the Item component

const ProductList = () => {
  return (
    <div>
      {productDetails.map(product => (
        <Item key={product.id} product={product} /> // Pass the product data to Item
      ))}
    </div>
  );
};

export default ProductList;
