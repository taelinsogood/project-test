import React from 'react'
import 'css/cart.css';
import CartList from 'component/CartList';
import CartTotal from 'component/CartTotal';

const Cart = ({remove, convertPrice, cart}) => {
  return (
    <>
    <div>
        <div className='cartbox'>
            <h2 className='h2'>장바구니</h2>
            <br/>
            <div className='cartheader'>
                <div>선택버튼</div>
                <div>상품정보</div>
                <div>수량</div>
                <div>상품금액</div>
            </div>
            <br/>
            { cart.length === 0 ? (
                <div className='nocart'>
                    <h2>장바구니에 담긴 상품이 없습니다.</h2>
                    <br/>
                    <p className='nocartp'>원하는 상품을 장바구니에 담아보세요!</p>
                </div>
            ) : (
            cart.map((cart, idx)=>{
                return <CartList key={idx} remove={remove} convertPrice={convertPrice} cart={cart}/>
            }))}
            <br/>
            { cart.length === 0 ? "" : <CartTotal cart={cart} convertPrice={convertPrice}/>}
        </div>
        <br/>
    </div>
    </>
  )
}

export default Cart