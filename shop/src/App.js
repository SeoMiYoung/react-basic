import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './page/detail/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import bg from '../src/img/bg.png';
import Card from '../src/component/Card/Card.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* 참고로 Bootstrap에서 가져온것도 컴포넌트에 className을 붙혀서 추가로 커스텀할 수 있음 */}
      {/* 아래 Navbar도 공용 컴포넌트로 빼낼 수 있을 듯. 근데 귀찮아서 안함. */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Ming's Shoe Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      {/* react-router-dom */}
      <Routes>
        <Route path="/" element={
          // 여기
              <>
                {/* 메인 백그라운드 이미지 */}
                <div className="main-bg" style={{ backgroundImage: 'url('+bg+')'}}></div>
  
                {/* 상품 레이아웃 3개 만들기(Bootstrap 사용) */}
                <div className="container">
                  <div className="row">
                    {
                      shoes.map(function(data, index) {
                        return (
                          <Card shoes={shoes[index]} imgSrc={'https://codingapple1.github.io/shop/shoes'+ (index+1) +'.jpg'}/>
                        )
                      })
                    }
                  </div>
                </div>
  
                {/* 버튼 만들기 Ajax 요청 */}
                <button onClick={()=>{
                  // ajax 이용한 GET요청은 axios.get('url')
                  // ajax 요청에는 부가 정보들도 따라옴 (성공여부, 어디서 어떻게 왔는지..)
                  // 새로고침 없이 데이터를 가져옴
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{
                      console.log(result.data);
  
                      // axios의 경우, JSON 변환 과정 생략 가능하다
                      // 기존 shoes에 없는 상품들만(id로 구별) 합치기
                      let copy = [...shoes, ...result.data.filter(item => !shoes.some(shoe => shoe.id === item.id))];
                      setShoes(copy);
                    })
                    .catch(()=>{
                      // ajax 요청이 실패했을 경우의 코드
                    })
                }}>더보기</button>
            </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} /> 
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </>
  )
}

export default App;
