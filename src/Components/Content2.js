import { Component } from 'react';


class Content2 extends Component {
    render() {
      return (
       
        <section id="content2">
        <h2>오늘의 상품 추천</h2>
        <ul className="clearfix">
            <li>
                <a href="#">
                    <img src="https://thumbnail.10x10.co.kr/webimage/image/basic600/218/B002181115.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false" alt="지갑"/>
                    <span>구구마몬트 장지갑</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://imgcdn.uuumall.kr/product/1/1570/default/1570_20200504091041.jpg?w=0&h=0&f=jpeg&q=60" alt="치약"/>
                    <span>치약 팔아요</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://image.player.co.kr/goods_img1/20191031/1493805/1493805_a_500.jpg" alt="노트북"/>
                    <span>asus 노트북</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="https://image.player.co.kr/goods_img1/20191031/1493805/1493805_a_500.jpg" alt="패딩"/>
                    <span>패딩 판매합니다</span>
                </a>
            </li>
        </ul>
    </section>
    

      );
    }
  }
  
  export default Content2;