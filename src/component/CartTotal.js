import React from 'react'
import { useState } from 'react';
import {BsDashCircleFill} from 'react-icons/bs';
import {BsPlusCircleFill} from 'react-icons/bs';
import {BsPauseCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartTotal = ({convertPrice, cart}) => {
  const add = cart.reduce((a, b)=> a + b.price * b.count, 0);
  console.log(cart);
  return (
    <>
    <div className='carttotal'>
      <div>
        <div>총 쿠키 금액</div>
        <div>{convertPrice(add)}원</div>
      </div>
      {/* <BsDashCircleFill className='BsDashCircleFill'/>
      <div>
        <div>쿠키 할인</div>
        <div>0 원</div>
      </div> */}
      <BsPlusCircleFill className='BsPlusCircleFill'/>
      <div>
        <div>배송비</div>
        <div> 4,000 원</div>
      </div>
      <BsPauseCircleFill className='BsPauseCircleFill'/>
      <div>
        <div>결제 예상 금액</div>
        <div>{convertPrice(add + 4000)}원</div>
      </div>
      <Link to="/order"><button className='totalorder'>주문하기</button></Link>
    </div>
    </>
  )
}

export default CartTotal