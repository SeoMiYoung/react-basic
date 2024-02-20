import { useEffect, useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import Detail from './page/detail/Detail.js';
import Home from './page/home/Home.js';
import Cart from './page/cart/Cart.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from "react-query";

export let Context1 = createContext(); // context를 하나 만들어줌(state 보관함)

function App() {
  let [storage] = useState([10, 11, 12]);

  useEffect(()=>{
    console.log("App이 랜더링 됩니다.");
  });

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  // react-query를 이용해서 ajax 요청을 해보자
  useQuery('작명', ()=>{
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a)=>{
        a.data
      })
  })

  return (
    <div className="App">
      {/* 참고로 Bootstrap에서 가져온것도 컴포넌트에 className을 붙혀서 추가로 커스텀할 수 있음 */}
      {/* 아래 Navbar도 공용 컴포넌트로 빼낼 수 있을 듯. 근데 귀찮아서 안함. */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Ming's Shoe Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
        </Nav>
        <Nav className="ms-auto">반가워요 Seo</Nav>
        </Container>
      </Navbar>

      {/* react-router-dom */}
      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes}/>} />
        <Route path="/detail/:id" element={<Context1.Provider value={{storage, shoes}}><Detail shoes={shoes}/></Context1.Provider>} />
        <Route path="/cart" element={<Cart />} />
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
