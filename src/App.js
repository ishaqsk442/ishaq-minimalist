import React, { useState } from 'react';
// import Header from './components/Header';
import Header from './components/Header/Header';
// import ProductList from './components/ProductList';
import ProductList from './components/ProductList/ProductList';
// import Footer from './components/Footer';
import Footer from './components/Footer/Footer';
// import ProductPopup from './components/ProductPopup';
import ProductPopup from './components/ProductPopup/ProductPopup';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Header />
      <ProductList onProductClick={handleProductClick} />
      <Footer />
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
