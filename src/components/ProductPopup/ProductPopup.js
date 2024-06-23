import React from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>{product.name}</h2>
      <p>Product Description:</p>
      <p>This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.</p>
      <p>Product Contents:</p>
      <p>{product.description}</p>
      <p>Shipping Time:</p>
      <p>Before Raju understands that his dreams do not matter.</p>
      <p>Choose Now</p>
      <p>MRP: Raju’s Dreams/-</p>
    </div>
  </div>
);

export default ProductPopup;
