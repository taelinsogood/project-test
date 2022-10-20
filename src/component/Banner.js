import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import 'css/banner.css';

function Banner() {
  return (
    <>
    <div className='banner'>
    <Carousel className='ba'>
      <Carousel.Item>
        <img
          className="d-block"
          style={{width: "30%", height: "300px"}}
          src={require("img/쿠키.1.png")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='title'>
          <h3>내가 만든 쿠키</h3>
          <p>너를 위해 구웠지. but you know that it ain't for free, yeah🍪</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{width: "30%", height: "300px"}}
          src={require("img/쿠키.2.png")}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='title'>
          <h3>네 다이어트 망치고 싶어, 나</h3>
          <p>Take it, don't break it, I wanna see you taste it🍪</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{width: "30%", height: "300px"}}
          src={require("img/쿠키.3.png")}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='title'>
          <h3>내가 만든 쿠키</h3>
          <p>come and take a lookie 우리 집에만 있지 놀러와🍪</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Banner;