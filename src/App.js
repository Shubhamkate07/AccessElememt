// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
// Import other components as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* Add other routes as needed */}
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Define a route for product details */}
      </Routes>
    </Router>
  );
};

export default App;
