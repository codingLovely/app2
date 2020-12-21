import { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import App from './Write.css';
class Write extends Component {
    render() {
      return (  
        <Fragment>
          <Header/>
           <div className="pad">
             <span id ="info">기본정보</span> 
             <span className = "redStar"> *필수항목</span></div>
           <hr id ="firstHr"></hr>
           <div className="pad">
             <span className ="fontSize">
             <span id = "itemI">상품이미지</span> 
             </span>
             {/* <span id = "photo">
             <img id = "photo"src="https://us.123rf.com/450wm/saravector/saravector1603/saravector160300343/54395100-%EC%B2%A8%EB%B6%80-%ED%8C%8C%EC%9D%BC-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%AC%B8%EC%84%9C.jpg?ver=6"/></span> */}
             <div id = "imgColor">
               * 상품 이미지는 640x640에 최적화 되어 있습니다.
                - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
                - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
                - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
                - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
                최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)</div>
             </div>
           <hr></hr>
           <div className="pad">
           <span className ="fontSize">
             제목
             </span> <input type = "text" size="50" placeholder ="상품 제목을 입력해주세요"/></div>
           <hr></hr>
           <div className = "pad">
           <span className ="fontSize">
             카테고리
             </span>
             <div className = "dropdown">
               <button className = "dropbtn">카테고리분류</button>
                  <div className = "dropdown-content">
                  <a href="#">디지털/가전</a>
                  <a href="#">패션잡화</a>
                  <a href="#">스타굿즈</a>
                  </div>
                  </div>
             </div>
           <hr></hr>
           <div className = "pad">
           <span className = "fontSize">
             거래지역 
             </span>
             <span id = "texM"> 
              <input type ="text" placeholder ="버튼을 누르시면 자동으로 입력됩니다."/>  
             </span>
             <button>내 위치</button>
             <button>주소검색</button>
           </div>
           <hr></hr>
           <div className = "pad">
           <span className = "fontSize">
             상태
            </span>
            <span id = "radioPadding">
             <input type = "radio" name = "status" value ="old"/>중고상품
             </span>
             <input type = "radio" name = "status" value ="new"/>새상품
           </div>
           <hr></hr>
           <div className = "pad">
           <span className = "fontSize">
             교환
            </span>
            <span id = "radioPadding">
             <input type = "radio" name = "status" value ="old"/>교환불가
            </span> 
             <input type = "radio" name = "status" value ="new"/>교환가능
           </div>
           <hr></hr>
           <div className = "pad">
           <span class  = "fontSize">
             가격
           </span>
           <span id = "radioPadding">
             <input type = "radio" name = "status" value ="old"/>중고상품
             </span>
             <input type = "radio" name = "status" value ="new"/>새상품
           </div>
           <hr></hr>
           <div className = "pad">
           <span className ="fontSize">
             설명
            </span>
            <span id = "radioPadding">
             <input type = "radio" name = "status" value ="old"/>중고상품
            </span> 
             <input type = "radio" name = "status" value ="new"/>새상품
           </div>
           <hr></hr>
           <div className ="pad">
           <span className ="fontSize">
             연관태그
             </span>
             <span id = "radioPadding">
             <input type = "radio" name = "status" value ="old"/>중고상품
             </span>
             <input type = "radio" name = "status" value ="new"/>새상품
           </div>
           <hr></hr>
           <div className="pad">
           <span className ="fontSize">
             수량
             </span>
             <span id = "radioPadding">
             <input type = "radio" name = "status" value ="old"/>중고상품
             </span>
             <input type = "radio" name = "status" value ="new"/>새상품
           </div>
           <hr></hr>
           <div id = "page">
            <h4>*꼭 읽어주세요 <a href = "#">[이용 가이드]</a></h4>
            <div>
            상품등록 시 번개페이가 자동 적용됩니다. 거래완료 후 등록된 계좌로 
            입금되며 정산확인은 마이메뉴구매/판매내역 에서 가능합니다.
            </div>
          </div>
           <div id ="endBtn"><button>등록하기</button></div>
           <Footer/>
        </Fragment>
      );
    }
  }
  
  export default Write;