import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Raju Rassibomb', description: '10 hand-hurting pieces of rassi bombs' },
  { id: 2, name: 'Ladiyon ki Rani Chani', description: 'Details for this product' }
];

const ProductList = ({ onProductClick }) => (
  <div className="product-list" id="products">
    {products.map(product => (
      <div key={product.id} className="product-item" onClick={() => onProductClick(product)}>
        <h2>{product.name}</h2>
        <p>Quick View</p>
      </div>
    ))}
  </div>
);

export default ProductList;
