import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

// import '../styles/Home.css';

const Home = () => {
  return (
    <Products products ={initialState.products} />

  );
}

export default Home;