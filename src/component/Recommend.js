import React, { useEffect, useState } from 'react'
import CookieList from './CookieList';
import 'css/recomment.css';
import {Cookies} from 'Cookies'; 
import axios from 'axios';

const Recommend = ({convertPrice, products, setProducts}) => {
  
  // useEffect(()=>{
  //   axios.get("./Cookies.json").then((data)=>{
  //     console.log(data);
  //   })
  // }, [])
  
  return (
    <>
    <div>
        <div className='commend'>
            <h3>Recommend Cookie</h3>
            <p className='p'>
            많이 달지 않아 누구나 부담없이 즐길 수 있으며
            귀여운 미니 사이즈로 커피,<br></br> 차 한 잔과 딱!인
            도톰하고 촉촉한 식감의 쿠키 입니다.
            최소수량 6개 주문시 선물세트 포장 가능합니다.<br></br>
            선물세트 및 답례품, 단체주문은 아이디어스 메시지 또는 카카오 채널 <br></br>
            시그널라이트로 문의 주세요 :-)<br></br></p>
        </div>
        <div className='wrap'>
            {Cookies.map((products, idx)=>{
              return <CookieList key={idx} convertPrice={convertPrice} products={products}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Recommend