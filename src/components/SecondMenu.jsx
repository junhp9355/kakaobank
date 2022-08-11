import React from 'react';
import '../styles/SecondMenu.css';

const SecondMenu = () => {
    return (
        <section className='SecondMenu'>
            <ul className='Second-01'>
                <li><a href="#!" className='second-title'>카카오뱅크</a></li>
                <li><a href="#!">브랜드</a></li>
                <li><a href="#!">주주사 소개</a></li>
                <li><a href="#!">오시는 길</a></li>
                <li><a href="#!">제휴문의</a></li>
            </ul>
            <ul className='Second-02'>
                <li><a href="#!" className='second-title'>윤리경영</a></li>
                <li><a href="#!">윤리강령</a></li>
                <li><a href="#!">임직원행동기준</a></li>
            </ul>
            <ul className='Second-03'>
                <li><a href="#!" className='second-title'>인재영입 ></a></li>
            </ul>
            <ul className='Second-04'>
                <li><a href="#!" className='second-title'>새소식</a></li>
                <li><a href="#!">공지사항</a></li>
                <li><a href="#!">보도자료</a></li>
                <li><a href="#!">입찰공고</a></li>
            </ul>
        </section>
    );
};

export default SecondMenu;