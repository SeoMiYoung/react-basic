import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      {/* 참고로 Bootstrap에서 가져온것도 컴포넌트에 className을 붙혀서 추가로 커스텀할 수 있음 */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Ming Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="main-bg">
      </div>
    </div>
  );
}

export default App;
