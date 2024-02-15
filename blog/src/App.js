// Lint를 끄는 기능임
/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // a 작명: state에 보관했던 자료가 나옴
  // b 작명: state 변경을 도와주는 함수
  let [title, setTitle] = useState(['등록금 고지서 나온 날', '떡볶이가 땡긴 날', '하루종일 논 날']);
  let [showModal, setShowModal] = useState(false);
  // 좋아요 개수
  let [good, setGood] = useState([0,0,0]);
  
  // 현재 보고 있는 글
  let [contentNum, setContentNum] = useState(1); // 1번 글을 보고 있습니다
  // let [previousContentNum, setPreviousContentNum] = useState(1);

  // input 내용 저장
  let [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Miyoung's Blog</h4>
      </div>
      {
        // 안타깝게도 for반복문 사용 불가
          // for문법은 JSX안에서 사용 불가능
          // 대용으로 map함수 사용 가능
        title.map(function(data, index) {
          return (
            <div className='list' key={index}>
              <h4 onClick={()=>{
                setContentNum(index+1); // index+1번 글 보고 있다고 설정

                if(showModal == true) { // 이미 모달창이 띄워져있다면
                  if(contentNum == index+1) { // 이미 보고 있는 content라면
                    setShowModal(false); // 모달창 닫기
                  }
                  else { // 새로운 글 클릭
                    setShowModal(true);
                  }
                }
                else { // 모달창이 닫혀져 있다면
                  setShowModal(true); // 모달창을 띄운다
                }
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
              <button onClick={()=>{
                if(contentNum == index+1) { // 삭제하려고 하는 글의 모달창이 띄워져있다면
                  alert("관련 글을 보고 있어서 삭제가 불가능합니다!");
                }
                else {
                  let copyTitle = [...title];
                  let copyGood = [...good];
  
                  copyTitle.splice(index, 1);
                  copyGood.splice(index, 1);
  
                  setTitle(copyTitle);
                  setGood(copyGood);

                  if(index+1 < contentNum) { // 삭제하려고 하는 글이 지금 보고 있는 글보다 앞에 있는 경우
                    setContentNum(contentNum-1);
                  }
                }
              }}>삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e)=>{
        setInputText(e.target.value);
      }} />
      <button onClick={()=>{
        let newTitle = [inputText, ...title];
        let newGood = [0, ...good];

        setTitle(newTitle);
        setGood(newGood);

        setContentNum(++contentNum);
        document.querySelector('input').value = ''; // input 요소의 화면에 보여지는 내용도 지움
      }}>글 추가</button>
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

// class형식으로 컴포넌트 만들기(옛방식)
class MakeModal2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>안녕</div>
    )
  }
}
export default App;
