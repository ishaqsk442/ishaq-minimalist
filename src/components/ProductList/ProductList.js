import React from 'react';
import './ProductList.css';
import border from '../Assets/border.png'
import innercard from '../Assets/innercard.png'

const products = [
  { id: 1, name: 'Raju Rassibomb', description: '10 hand-hurting pieces of rassi bombs'},
  { id: 2, name: 'Ladiyon ki Rani Chani', description: 'Details for this product' }
];

const ProductList = ({ onProductClick }) => (
    <div className="product-list" id="products">
    <div className='product-head'>
        <img className="img" src={border} alt='border' />
        <h1>Our Products</h1>
        <img className="img"  src={border} alt='border' />
    </div>
    {products.map(product => (
        <div key={product.id} className="product-item" onClick={() => onProductClick(product)}>
            <img className="card-img" src={innercard} alt="inner-card" />
            <div className='card-name'>
        <h2>{product.name}</h2>
                <button className='card-btn'>Quick View</button>
                </div>
      </div>
    ))}
  </div>
);

export default ProductList;
