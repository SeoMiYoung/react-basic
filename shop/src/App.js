import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './page/detail/Detail.js';
import Home from './page/home/Home.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      {/* 참고로 Bootstrap에서 가져온것도 컴포넌트에 className을 붙혀서 추가로 커스텀할 수 있음 */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Ming's Shoe Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          {/* <Nav.Link href="#menu">Menu</Nav.Link> */}
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      {/* 페이지 이동 버튼은 Link */}
      <Link to="/">홈</Link>
      <br/>
      <Link to="/detail">상세페이지</Link>

      {/* react-router-dom */}
      <Routes>
        <Route path="/" element={<Home shoes={shoes}/>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
