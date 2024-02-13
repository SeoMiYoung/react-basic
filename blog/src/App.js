// Lint를 끄는 기능임
/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // a 작명: state에 보관했던 자료가 나옴
  // b 작명: state 변경을 도와주는 함수
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
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
      <div className="list">
        <h4>
          {title[0]}
          <span>👍</span>
          0
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]}
          <span>👍</span>
          0
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[2]}
          <span onClick={clickGood}>👍</span>
          0
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <MakeModal></MakeModal>
    </div>
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
