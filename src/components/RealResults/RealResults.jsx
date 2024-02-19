import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './RealResults.scss'
import Target from '../../images/таргет-2.png'
import { Frame } from '../Frame/Frame'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "none", color: '#F9639F' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "none" }}
      onClick={onClick}
    />
  );
}


export const RealResults = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='content'>
      <Frame />
      <div className='realResults-container'>
        <div className='realResults-container-flex'>
          <h1>Реальные результаты</h1>
          <div className='realResults-container-flex-box'>
            <div className="realResults-container-flex-box-product">
              <Slider {...settings}>
                <div>
                  <img src={Target} alt="" />
                </div>
                <div>
                  <img src={Target} alt="" />
                </div>
                <div>
                  <img src={Target} alt="" />
                </div>
                <div>
                  <img src={Target} alt="" />
                </div>
                <div>
                  <img src={Target} alt="" />
                </div>
                <div>
                  <img src={Target} alt="" />
                </div>
              </Slider>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
