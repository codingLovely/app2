import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Banner extends React.Component {
    render() {
      var settings = {
        dots: true, // 캐러셀의 점을 보여줄 것인지
        infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
        // speed: 10, // 넘어가는 속도는 몇으로 할 것인지
        // slidesToShow: 1, 
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed :1500
      };
      return (
            <Slider {...settings}>
                {/* <section id = "banner"> */}
                    <div >
                        <img src ="https://media.bunjang.co.kr/images/nocrop/556141867.jpg" alt = "banner img1" />
                    </div>
                    <div >
                        <img src="https://media.bunjang.co.kr/images/nocrop/556475913.jpg" alt = "banner img2"/>
                    </div>
                    <div >
                        <img src="https://media.bunjang.co.kr/images/nocrop/556141867.jpg" alt = "banner img3"/>

                    </div>
                {/* </section> */}
            </Slider>
    
      );
    }
  }

  export default Banner;

