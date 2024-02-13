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
  
  // 현재 보고 있는 글
  let [contentNum, setContentNum] = useState(1); // 1번 글을 보고 있습니다

  // onClick
  function clickGood() {
    // setGood(good[0]+1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      {
        // 안타깝게도 for반복문 사용 불가
          // for문법은 JSX안에서 사용 불가능
          // 대용으로 map함수 사용 가능
        title.map(function(data, index) {
          return (
            <div className='list' key={index}>
              <h4 onClick={()=>{
                setContentNum(index+1);
                setShowModal(true);
              }}>
                {title[index]}
                <span onClick={(e)=>{
                  // 이벤트버블링 막기
                  e.stopPropagation();
                  
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
      <input type="text">

      </input>
      { // javascript넣기 위해 중괄호
        // 안타깝게도, 중괄호안에는 if문같은거 못씀
          // 왜냐면, 여기는 html작성 공간이여서..
          // 대용으로 삼항연산자 사용
        // props 전달
          // 작명={title}
            // 작명이라는 이름으로 title 값을 전달하겠다
            // 보통 기존과 같은 이름으로 작명함
        (showModal == true) ? <MakeModal contentNum={contentNum} title={title} setTitle={setTitle} color='pink'/> : null
      }
    </div> // 전체를 감싼 태그 
  );
}

// 컴포넌트 만들기
function MakeModal(props) { // props는 작명임(자유)
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title[props.contentNum-1]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0] = '여성 코트 추천';
        props.setTitle(copy);
      }}>글수정</button>
    </div>
  );
}
export default App;
