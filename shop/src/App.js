import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.js';
import Card from './component/Card/Card.js';
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

      {/* react-router-dom */}
      <Routes>
        <Route path="/" element={
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
          </> 
        } />
        <Route path="/detail" element={<div>상세 페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
