import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './SHOP/Pages/Home';
import Header from './SHOP/Pages/Header';
import Footer from './SHOP/Pages/Footer';
import './css/page.css';
import Banner from 'component/Banner';
import CookieDetail from 'SHOP/Pages/CookieDetail';
import Scroll from 'Scroll';
import Login from 'SHOP/Pages/Login';
import Cookies from 'Cookies';
import Cart from 'SHOP/Pages/Cart';
import CartList from 'component/CartList';
import Signup from 'SHOP/Pages/Signup';
import Order from 'SHOP/Pages/Order';

function App() {
  const [products, setProducts] = useState([]);  //상품에 대한 데이터들 (여기저기 써야 하기 때문에 최상의 컴포넌트에 정의)
  const [cart, setCart] = useState([]);  //Buttons.js에 본체 있음
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const remove = (id) => {
    setCart(cart.filter(cart => cart.id !== id));
  }

  return (
    <>
    <BrowserRouter>
    {/* <Scroll/> */}
    <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Home convertPrice={convertPrice} products={products} setProducts={setProducts}/>} /> 
          <Route path="/detail/:name" element={<CookieDetail convertPrice={convertPrice} cart={cart} setCart={setCart}/>} />
          <Route path="/cart" element={<Cart remove={remove} convertPrice={convertPrice} cart={cart} setCart={setCart}/>} />   {/* 부트스트랩이 안 먹음 */}
          <Route path="/login" element={<Login  cart={cart}/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      <Footer/>
  </BrowserRouter>
  </> 
  );
}

export default App;

// 가데이터는 json으로 만들기 !! 