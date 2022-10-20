import React, { useContext, useState } from 'react'
import Banner from 'component/Banner'
import 'css/home.css';
import Recommend from 'component/Recommend';

const Home = ({convertPrice, products, setProducts}) => {
  
  return (
    <>
      <Banner/>
      <Recommend convertPrice={convertPrice} products={products} setProducts={setProducts}/>
    </>
  )
}

export default Home