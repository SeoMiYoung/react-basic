import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect } from 'react';
import bg from '../../img/bg.png';
import Card from '../../component/Card/Card.js';
import axios from 'axios';

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

            {/* 버튼 만들기 Ajax 요청 */}
            <button onClick={()=>{
              // [로딩] 로딩 중 UI 띄우기
              // ajax 이용한 GET요청은 axios.get('url')
              // ajax 요청에는 부가 정보들도 따라옴 (성공여부, 어디서 어떻게 왔는지..)
              // 새로고침 없이 데이터를 가져옴
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  console.log(result.data);

                  // axios의 경우, JSON 변환 과정 생략 가능하다
                  // 기존 shoes에 없는 상품들만(id로 구별) 합치기
                  let copy = [...props.shoes, ...result.data.filter(item => !props.shoes.some(shoe => shoe.id === item.id))];
                  props.setShoes(copy);

                  // [로딩] 로딩 중 UI 없애기
                })
                .catch(()=>{
                  // ajax 요청이 실패했을 경우의 코드
                  // [로딩] 로딩 중 UI 없애기
                })
            }}>버튼</button>
        </>
    )
}

export default Home;