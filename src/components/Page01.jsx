import React from 'react';
import '../styles/Page01.css'

const Page01 = () => {
    return (
        <section className='Page01'>
            <div className='background'>
                <div className='area01'>
                    <h3 className='text01-1'>
                    이미 모두의 은행
                    <br />
                    지금은 카카오뱅크
                        <p className='text01-2'>
                        한 사람, 한 사람을 위해 시작한 은행이
                        <br />
                        더 많은 사람들이 찾는 모두의 은행이 되었습니다.
                        <br />
                        <br />
                        보내고, 받고, 모으고, 쓰는
                        <br />
                        당신의 모든 일이 바뀌고 있습니다.
                        </p>
                    </h3>
                    
                
                    <img className='img01' src="img/main-bg3.png" alt="main01" />
                </div>
            </div>
        
        </section>
    );
};

export default Page01;