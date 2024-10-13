// Item.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ( props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Pass the product data through the state
    navigate(`/product/${props.product.id}`);
  };

  return (
    <div onClick={handleClick} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer' }}>
      <img src={props.product.imgUrl} alt={props.product.name} />
      <h3>{props.product.name}</h3>
      <p>Old Price: ${props.product.oldPrice}</p>
      <p>New Price: ${props.product.newPrice}</p>
    </div>
  );
};

export default Item;
