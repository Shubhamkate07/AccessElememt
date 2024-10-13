// ProductDetails.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {productDetails} from './data.js';


const ProductDetails = () => {

  const {id}= useParams();
  // const location = useLocation();
  // const { product } = location.state; // Destructure product from the 

  const product= productDetails.find((ele)=>{
   return ele.id===parseInt(id);
  });

  // console.log(typeof product);  object
  

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


// I am commited........

export default ProductDetails;
