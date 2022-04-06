import React, {useContext} from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';

import '../styles/Products.css';

const Products = () => {
  const {state, addToCart} = useContext(AppContext);
  const {products} = state;
  
  const handleAddToCart = (product,index)=> ()=>{
    addToCart(
      product,
      index
    );
  }
  return (
    <div className='Products'>
      <div className="Products-items">
        {products.map((product, index) => (
          <Product key={`${index}--${product.id}`}  product={product} handleAddToCart={handleAddToCart(product,index)}/>
        ))}
      </div>
    </div>
  );
}

export default Products;