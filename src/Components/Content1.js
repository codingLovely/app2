import { Component } from 'react';


class Content1 extends Component {
    render() {
      return (
   <section id="content1" className="clearfix">
        <article className="notice">
            <ul className="clearfix">
                <li className="active"><a href="#">오늘의 상품추천</a>
                    <ul className = "go">
                        <li><a href="#">1. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">1. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">1. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">1. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">1. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        
                    </ul>
                </li>
                <li className="burn"><a href="#" id ="font">번개톡</a>
                    <ul className = "go">
                        <li><a href="#">2. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">2. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">2. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">2. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                        <li><a href="#">2. 첫번째 목록입니다. </a><span>2020.12.27</span></li>
                    </ul>
                </li>
            </ul>
            <a href="#" className="more">더보기 +</a>
        </article>
        <figure className="ad">
            <a href="#"><img src="https://image.chosun.com/sitedata/image/202006/25/2020062503487_0.png" alt="온종일 혜택"/></a>
        </figure>
    </section>
   
      );
    }
  }
  
  export default Content1;