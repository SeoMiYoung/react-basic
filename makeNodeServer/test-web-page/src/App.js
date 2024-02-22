import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          서버 연결 테스트용 웹페이지 입니다.
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          연결을 성공시켜보자~
        </a>
      </header>
    </div>
  );
}

export default App;
