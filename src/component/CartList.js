import React, { useState } from 'react'
import {FcCollapse} from 'react-icons/fc';
import {FcExpand} from 'react-icons/fc';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {BsX} from 'react-icons/bs';

const CartList = ({remove, convertPrice, cart}) => {
  const [check, setCheck] = useState(false);
  console.log(cart);
  return (
    <>
    <div className='cartlist'>
    <BsFillCheckCircleFill className='BsFillCheckCircleFill'/>
      <div className='cartinfo'>
          <img src={cart.img} className='cartimg'></img>
          <div className='cartinfolist'>
            <div>{cart.name}</div>
            <div>₩ {convertPrice(cart.price)}</div>
          </div>
      </div>
      <div>
        {/* <FcCollapse/> */}
        <div className='num'>{cart.count}</div>
        {/* <FcExpand/> */}
      </div>
      <button className='order'>주문하기</button>
      <BsX className='BsX' onClick={()=>remove(cart.id)}/>   {/* map으로 돌려서 삭제 !! */}
    </div>
    </>
  )
}

export default CartList