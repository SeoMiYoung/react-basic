import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './page/detail/Detail.js';
import Home from './page/home/Home.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
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
        <Route path="/" element={<Home shoes={shoes}/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} /> 
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
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
