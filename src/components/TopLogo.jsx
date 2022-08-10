import React from 'react';
import {ReactComponent as Logotop} from '../components/images/logo_black.svg';
import '../styles/TopLogo.css';

const TopLogo = () => {
    return (
        <div className='TopLogo'>
            <nav className='con'>
                <a href="#!">
                    <Logotop />
                </a>

                <ul className='menu-1'>
                    <li><a href="#!">은행소개</a></li>
                    <li><a href="#!">IR투자정보</a></li>
                    <li><a href="#!">상품안내</a></li>
                    <li><a href="#!">고객센터</a></li>
                    <li><a href="#!">이벤트</a></li>
                    <li className='menu-1-1'><a href="#!">서류제출하기</a></li>
                </ul>

            </nav>
        </div>
    );
};

export default TopLogo;