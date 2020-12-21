import { Component } from 'react';
import { Link } from 'react-router-dom';




class Header extends Component {
    render() {
      return (
            <header id="header" className="clearfix">
                <h1><Link to="/"><img src="https://www.startuptoday.co.kr/news/photo/201812/21119_4038_125.jpg" alt="번개장터 "/></Link></h1>
                <nav className="nav">
                    <ul className="clearfix">
                        <li><Link to="/write">판매하기</Link>
                            {/* <ul className="submenu">
                                <li><a href="#">subMenu-1</a></li>
                                <li><a href="#">subMenu-2</a></li>
                                <li><a href="#">subMenu-3</a></li>
                                <li><a href="#">subMenu-4</a></li>
                            </ul> */}
                        </li>
                        <li><Link to ="/item">내 상점</Link>
                            {/* <ul className="submenu">
                                <li><a href="#">subMenu-1</a></li>
                                <li><a href="#">subMenu-2</a></li>
                                <li><a href="#">subMenu-3</a></li>
                                <li><a href="#">subMenu-4</a></li>
                            </ul> */}
                        </li>
                        <li><a href="#">번개톡</a>
                            {/* <ul className="submenu">
                                <li><a href="#">subMenu-1</a></li>
                                <li><a href="#">subMenu-2</a></li>
                                <li><a href="#">subMenu-3</a></li>
                                <li><a href="#">subMenu-4</a></li>
                            </ul> */}
                        </li>
                        <li><a href="#">이용가이드</a>
                            {/* <ul className="submenu">
                                <li><a href="#">subMenu-1</a></li>
                                <li><a href="#">subMenu-2</a></li>
                                <li><a href="#">subMenu-3</a></li>
                                <li><a href="#">subMenu-4</a></li>
                            </ul> */}
                        </li>
                        <li><a href="#">소통서비스</a>
                            {/* <ul className="submenu">
                                <li><a href="#">subMenu-1</a></li>
                                <li><a href="#">subMenu-2</a></li>
                                <li><a href="#">subMenu-3</a></li>
                                <li><a href="#">subMenu-4</a></li>
                            </ul> */}
                        </li>
                    </ul>
                </nav>
            </header>
        
      );
    }
  }
  
  export default Header;