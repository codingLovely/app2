import { Component } from 'react';


class Footer extends Component {
    render() {
      return (  
        <footer id="footer">
            <address>
                <ul>
                    <li className="left">번개장터 입니다.</li>
                    <li>대표이사: 이재후</li>
                    <li>사업자등록번호: 313-131311-31111</li>
                    <li className="left">번개장터 고객센터: 02-2223-3333</li>
                    <li>전화: 010-0000-0000</li>
                </ul>
                <p>Copyright2018 Lotterworld, All Right RESERVED.</p>
            </address>
        </footer>
    
      );
    }
  }
  
  export default Footer;