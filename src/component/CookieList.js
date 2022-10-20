import React from 'react'
import 'css/cookielist.css';
import { useNavigate } from 'react-router';

const CookieList = ({ convertPrice, products }) => {
    const navigate = useNavigate();

  const onclickCookie = () => {
    navigate(`/detail/${products.name}`, {
        state: products     //state로 보내겠다 
    },
    )
  }
    return (
    <>
        <div className='container'>
            <div>
                <img src={products.src} style={{ width: 350, height: 350 }}  onClick={onclickCookie}/>
                <div className='div'>
                    <h2 className='h2'>{products.name}</h2>
                    <span className='span'>{convertPrice(products.price)}</span>
                    <p className='p'>{products.info}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default CookieList

{/* <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
           <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
           <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
            <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
            <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
            <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>    
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
            <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>    
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
            <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div> 
        <div>
        <img src={require("img/쿠키.1.png")} style={{width: 350, height: 350}}/>
            <div className='div'>
                <h2 className='h2'>FIORI DI ZUCCA</h2>
                <span className='span'>$ 19.90</span>
                <p className='p'>sfljajieskl</p>
            </div>
        </div>     */}