import { Component } from 'react';
import { Link } from 'react-router-dom';




class Header extends Component {
    render() {
      return (
            <header id="header" className="clearfix">
                <nav className="nav">
                    <ul className="clearfix">
                        <li><Link to="/write">회원현황</Link>
                           
                        </li>
                        <li><Link to ="/item">납부현황</Link>
                           
                        </li>
                        <li><Link to="/counsel">상담현황</Link>
                           
                        </li>
                        <li><Link to="/register">직원관리</Link>
                           
                        </li>
                        <li><Link to= "/login">로그인/로그아웃</Link>
                           
                        </li>
                    </ul>
                </nav>
            </header>
        
      );
    }
  }
  
  export default Header;