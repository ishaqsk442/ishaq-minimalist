import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './ProductPopup.css';
import CardDetails from "../CardDetails"
const ProductPopup = ({ product, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
            <button className="close-btn" onClick={onClose}>X</button>
            <CardDetails />
            <div className='data'>
                <h2>{product.name}</h2>
                <h3>MRP:</h3>
                <h3>Raju's Dreams/-</h3>
                <hr className="hr-line"></hr>
                <h4>Product Description:</h4>
                <p>This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.</p>
                <hr className="hr-line"></hr>
                <h4>Product Contents:</h4>
                <ul className="ul-list">
                    <li><AiFillStar className='icon'/> 10 hand hunting pieces of rasi bombs
                    </li>
                    <li><AiFillStar className='icon'/> jilled with great pain
                    </li>
                    <li><AiFillStar  className='icon'/> rajus hopes
                    </li>
                </ul>
                <hr className="hr-line"></hr>
                <h3>Shipping Time:</h3>
                <p>Before Raju understands that his dreams do not matter.</p>
                <button className='cards-btn'>Choose Now</button>
                
            </div>
    </div>
  </div>
);

export default ProductPopup;
