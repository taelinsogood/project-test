import React, { useReducer, useState } from 'react'
import 'css/detail.css';
import Buttons from 'component/Buttons';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router';

const reducer = (state, action) => {
    if (action.type === "down"){
        return state ;
    } else if (action.type === "up"){
        return state;
    }
}

const CookieDetail = ({convertPrice, cart, setCart}) => {
    const {state} = useLocation();    //정보 가져오기
    // console.log(state)
    const [count, setCount] = useState(1);
    const [price, dispatch] = useReducer(reducer, `${state.price}`);
    console.log('state',state)

// ======================================================================== 나중에 이해하기
    // 장바구니 물건 중복 방지 
    const Quantity = (id, quantity) => {
        const found = cart.filter((ca)=> ca.id === id)[0];
        const idx = cart.indexOf(found);
        const cartInfo = {
            id: state.id,
            name: state.name,
            img: state.src,
            price: state.price,
            pacege: state.pacage,
            count: quantity
          };
        setCart([...cart.slice(0, idx), cartInfo, ...cart.slice(idx + 1)]);
    };

    // 장바구니 물건
    const cartClick = () => {
        const cartInfo = {
          id: state.id,
          name: state.name,
          img: state.src,
          price: state.price,
          pacege: state.pacage,
          count: count   
        }
        const found = cart.find((el)=> el.id === cartInfo.id);
        if (found) Quantity(cartInfo.id, found.count + count);
        else setCart([cartInfo, ...cart]);
      }
// ========================================================================

  return (
    <>
    <div className='whole'>
        <div>
            <div className='img'>
                <img src={state.src} className="img-img"></img>
            </div>
            <div className='write'>
                ❗️필독❗️
                추석 전 받으실 수 있는 주문
                마감 되었습니다!!<br/>

                추석 연휴 지나고 9/13(화) 발송건 부터<br/>
                주문 가능합니다!!
                감사합니다🙇🏻‍♀️<br/>

                🍪E카페 수제 답례쿠키 세트는<br/>
                많이 달지 않아 누구나 부담없이 즐길 수 있으며<br/>
                귀여운 미니 사이즈로 커피, 차 한 잔과 딱!인
                도톰하고 촉촉한 식감의 쿠키 입니다.<br/>

                💝결혼식, 시보해제, 퇴사, 승진, 기업행사, 조문 등<br/>
                다양한 행사에 어울리는 답례품 세트 입니다.<br/>

                🚚 발송당일 구워 출고 해드리고 있어요.<br/>
                조금이라도 더 신선한 쿠키로 감사의 마음<br/>
                전달하실 수 있도록 노력하고 있습니다 :)<br/>

                💌 제약없이 자유로운 문구로 감사 카드를 제작해 드려요!<br/>
                - 수량중 일부만 다른 내용으로도 가능합니다.<br/>
                - 원하시는 부분은 언제든 문의 주세요.<br/>

                ⚡️적극적인 소통, 빠른 대응, 신속한 처리 :)<br/>
                - 주문부터 직접 받아보시게 되는 과정까지 생길 수 있는<br/>
                모든 상황에 대해 궁금하신점, 우려되는 상황 등<br/>
                연락주시면 빠르고 신속하게 대응 해드려요!<br/>


                🚚배송안내 🚚<br/>
                저희는 우체국 택배를 이용하고 있습니다.<br/>
                대부분 출고 이후 다음날 받아 보실 수 있습니다.<br/>
                하지만 택배사 물량 증가 등 혹시 모르는 상황을 위해<br/>
                발송일을 받아보시길 희망하시는 날 2일전 정도로 여유있게 잡아주세요 :)<br/>
                ❗️급하신 주문건은 문의 남겨주시면 빠르게 확인 후 답변 해드리겠습니다!<br/>

                ✔️출고 가능한 요일은 월~금 입니다. (일요일 X)<br/>

                ✔️금요일 출고건은 택배사 물량에 따라 월요일에 받으실 수 도 있는점 참고해주세요!<br/>

                ✔️택배 발송은 오전, 오후 시간 지정이 안됩니다.<br/>
                tip! 평소 우체국 택배 기사님이 방문 하시는 그 시간대쯤 받아보실 수 있을거에요!<br/>

                ✔️휴일 혹은 공휴일은 배송 진행이 안되기 때문에 꼭! 배송기간 중 공휴일이<br/>
                포함되어 있는지 확인 하신 후 희망 출고일을 작성해주세요!<br/>
            </div>
        </div>
        <div className='tittle'>
            <h4>{state.name} 🍪</h4>
            <p className='pp'>₩ {convertPrice(state.price)}</p>
          
            <p className='ppp'>{state.info}</p>
            <p className='ppp'>{state.info2}</p>
                <p>  
                    배송비
                    4,000 원 <span className='span'>(99,999,999원 이상 무료배송)</span><br/>
                    배송 시작 - 평균 2일, 최대 30일 이내<br/>
                    수량 - <span className='span'>(주문시 제작)</span>
                </p>
                <br/>
                <input
                    className='inputt'
                    type="text"
                    value={count}
                    onChange={(e)=>setCount(Number(e.target.value))}
                />{' '}
                <Button variant="warning"
                      value="-" type="button"
                      onClick={()=>{dispatch({type: "down", payload: count})
                      setCount(count-1)
                }}>-</Button>{' '}
                 <Button variant="warning" value="+" type="button"
                    onClick={()=>{dispatch({type: "up", payload: count})
                    setCount(count+1)
                    }}
                    >+</Button>
                <hr/>
            <div className='pay'>
            <br/>
            <h5>총 금액 : {convertPrice(price * count)} 원</h5>
            <br/>
                <Buttons cartClick={cartClick} state={state} cart={cart} setCart={setCart}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default CookieDetail