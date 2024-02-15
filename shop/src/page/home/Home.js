import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import bg from '../../img/bg.png';
import Card from '../../component/Card/Card.js';

function Home(props) {
    return (
        <>
            {/* 메인 백그라운드 이미지 */}
            <div className="main-bg" style={{ backgroundImage: 'url('+bg+')'}}></div>

            {/* 상품 레이아웃 3개 만들기(Bootstrap 사용) */}
            <div className="container">
              <div className="row">
                {
                  props.shoes.map(function(data, index) {
                    return (
                      <Card shoes={props.shoes[index]} imgSrc={'https://codingapple1.github.io/shop/shoes'+ (index+1) +'.jpg'}/>
                    )
                  })
                }
              </div>
            </div>
        </>
    )
}

export default Home;