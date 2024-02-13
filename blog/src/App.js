// Lint를 끄는 기능임
/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // a 작명: state에 보관했던 자료가 나옴
  // b 작명: state 변경을 도와주는 함수
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [showModal, setShowModal] = useState(false);
  // 좋아요 개수
  let [good, setGood] = useState([0,0,0]);
  
  // onClick
  function clickGood() {
    // setGood(good[0]+1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort(); // 가나다순 정렬
        setTitle(copy);
      }}>
        가나다순 정렬
      </button>
      <button onClick={()=>{
        // 일부만 바꿔서 state 변경 함수에 넣기(확장성 있는 코드)
        // 화살표를 새로 바꿔주세요~
        let copy = [...title];
        copy[0] = '여성 코트 추천';
        setTitle(copy);
      }}>성별 바꾸기</button>
      
      {
        // 안타깝게도 for반복문 사용 불가
          // 대용으로 map함수 사용 가능
        title.map(function(data, index) {
          return (
            <div className='list'>
              <h4 onClick={()=>{
                setShowModal(!showModal);
              }}>
                {title[index]}
                <span onClick={()=>{
                  // 좋아요 하나 늘리기
                  let copy = [...good];
                  ++copy[index];
                  setGood(copy);
                }}>👍</span>
                {good[index]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      { // javascript넣기 위해 중괄호
        // 안타깝게도, 중괄호안에는 if문같은거 못씀
          // 왜냐면, 여기는 html작성 공간이여서..
          // 대용으로 삼항연산자 사용
        (showModal == true) ? <MakeModal/> : null
      }
    </div> // 전체를 감싼 태그 
  );
}

// 컴포넌트 만들기
function MakeModal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
