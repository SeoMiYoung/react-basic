# 📢 레포지토리 설명
리액트 공부 (코딩애플 리액트 강의로 학습중..)

# 🗓️ 공부 기간
2024.02.10 ~<br/>

# 👩‍💻 Commit 형식
<table>
  <tr>
    <th>[myself] 내용</th>
    <td>스스로 과제 코드</td>
  </tr>
  <tr>
    <th>[answer] 내용</th>
    <td>해설 후 수정 코드</td>
  </tr>
  <tr>
    <th>[bug] 내용</th>
    <td>버그 해결</td>
  </tr>
  <tr>
    <th>내용</th>
    <td>내용에 관련된 코드</td>
  </tr>
</table>

#### 🔊 별표시 
공부하다가 어려웠던 건, 어려웠던 정도만큼 ⭐표시가 commit 문구 앞에 붙습니다. (⭐~⭐⭐⭐)

# ✍️ Memo
<details>
<summary>☑️ React를 왜 사용할까?</summary><br/>
React를 사용하지 않고, 단순히 JS만으로도 SPA를 만들 수 있지만, 그렇게 하면 코드가 길고 복잡해집니다.<br/>
- React를 사용하면 html 재사용 굳<br/>
- React를 알면, 같은 문법으로 React Native를 사용해서 모바일 앱을 만들 수 있음<br/>
</details>

<details>
<summary>☑️ 간단한 CRA 폴더 구조 설명</summary><br/>
<table>
<tr>
  <th>node_modules</th>
  <td>
    모든 라이브러리의 소스코드를 모아놓은 폴더
  </td>
</tr>
  <tr>
  <th>public</th>
  <td>static 파일을 모아놓는 곳, html파일이나 이미지 파일등을 잠깐 모아놓고 싶을때</td>
</tr>
<tr>
  <th>src</th>
  <td>
    여러분들이 코드를 짜는 곳임(소스코드 보관함)<br/><br/>
    ✔️ App.js : 메인 페이지<br/>
    ● 웹페이지는 html파일들로 이루어져있는데, 지금 App.js를 보면 js파일안에 html코드를 짰는데도, 브라우저에서 잘 띄워주는 이유?<br/>
    src/index.js라는 파일이 app.js에 있던 html들을 public/index.html에 집어넣어줍니다.
  </td>
</tr>
<tr>
  <th>package.json</th>
  <td>
    프로젝트 정보들이 쭉 들어가있음(평소에 건들일이 거의 없음)
  </td>
</tr>
</table>
</details>

<details>
<summary>☑️ JSX</summary><br/>
JSX란, 자바스크립트안에서 HTML을 쉽게 작성할 수 있게 도와주는 자바스크립트에서 쓸 수 있는 언어입니다. 이걸 쓰는 이유는 원래 React에서 div태그 하나만 만들려고 해도, React.createElement('div', null, 'Hello World')이렇게 코드를 짜야합니다. 근데 이렇게 하나하나 태그를 만들면 너무 힘들잖아요...그래서 친절한 사람들이 JSX같은걸 써서 좀 쉽게 태그를 만들 수 있게 해준겁니다.<br/>
참고로, JSX안에서는 class라고 쓰면 안되고, className이라고 써야합니다..!
</details>

<details>
<summary>☑️ state를 쓰는 이유?</summary><br/>
왜 일반변수가 아니라 state를 쓰냐면, 일반 변수는 값이 변경되었을 때 html을 재랜더링해주지 않지만, state를 쓰면 값에 변화가 생겼을 때, html을 자동 재랜더링 시켜주기 때문입니다!<br/>
단, state는 변동시 자동으로 html에 반영되기 위해 사용하는거기 때문에, 로고같이, 변동될 가능성이 거의 없는 경우는 그냥 일반 변수를 쓰는게 낫습니다.<br/><br/>
✔️ state 변경 함수 동작 원리<br/>
state 변경함수는 기존 state와 신규 state를 비교해서 만약에 값이 같다면 변경을 해주지 않습니다(일종의 에너지 자원 절약인거지..).<br/><br/>

```
let [style, setStyle] = useState(['흰바지', '치마', '흰셔츠', '핑크원피스']);
let copy = style;
copy[1] = '청치마';
setStyle(copy); // 이렇게 해도 '치마'가 '청치마'로 바뀌지 않음
```

그 이유는, array/object 담은 변수엔 화살표(저장된 주소 위치를 가리키는)만 저장되는데, 그 안에 값을 변경해도 화살표 자체에는 변경이 없다고 생각되기 때문!<br/><br/>

✔️ state 변경 함수는 늦게 처리됩니다.<br/>
state를 변경하는 작업은 조금 오래걸리기 때문에(전문 용어로는 비동기처리) 자바스크립트에서는 이렇게 늦게 처리되는 애들은 일단 제쳐두고 다음 코드 먼저 실행시킵니다.

```
// 만약 [입력값, 입력값변경]이라는 state가 있을 때,
<input onChange={(e)=>{
  입력값변경(e.target.value); // 이거 완료되기전에
  console.log(입력값); // 다음줄 먼저 실행해줌
}} />
```
</details>

<details>
<summary>☑️ component</summary><br/>
✔️ component 만드는 법<br/>
1. 다른 함수 바깥에 function을 만든다. (작명은 영어 대문자로 시작)<br/>
2. return()안에 내가 축약할 html을 담는다. (단, 하나의 태그로 시작해서 하나로 끝나야 함)<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;- 의미없는 div태그가 싫으면 fragment를 사용하면 된다.<br/>
3. 컴포넌트를 마음에 드는 곳에 html태그 형식으로 가져다가 쓴다.
<br/><br/>
✔️ 어떤걸 컴포넌트로 만들면 좋을까?<br/>
- 반복적인 html을 축약할 때<br/>
- 큰 페이지들<br/>
- UI가 자주 변경되는 것들<br/><br/>
✔️ 컴포넌트 만드는 방법<br/>
1. function으로 (요즘 택)<br/>
2. class로 (요새는 안써서 사실 몰라도 됨)
</details>

<details>
<summary>☑️ Warning: Each child in a list should have a unique "key" prop</summary><br/>
해당 에러가 발생하는 이유는, 반복문으로 html을 생성하면 key={html마다 다른 숫자}를 추가해야하기 때문입니다.<br/>
반복문을 돌릴때마다 생성한 html들은 유니크한 key를 가져야하기 때문입니다.<br/>
  
```
글제목.map(function(data, index){
  return (
    <div key={index}>
      ~~~~
    </div>
  )
})
```
</details>

<details>
<summary>☑️ 반복문을 돌려서 태그를 만들고 싶다면?</summary><br/>
만약에 안녕이라는 텍스트가 담긴, div태그 세개를 반복문을 통해 놓고 싶다고 하자.<br/><br/>
✔️ in JSX 안<br/><br/>
  
```
function App() {
  let [title, setTitle] = useState(['제목1', '제목2', '제목3']);
  return (
    <div>
      { // JSX안에서 자바스크립트 코드를 위한 중괄호
        title.map(function(data, index) { // title의 데이터 갯수만큼 반복 실행(3번 반복)
          return (
            <div>안녕</div>
          )
        });
      }
    </div>
  )
}
```

✔️ in JSX 밖<br/>

```
function App() {
  var 어레이 = [];
  for (var i=0; i<3; i++) {
    어레이.push(<div>안녕</div>)
  }
  return (
    <div>
      {어레이}
    </div>
  )
}
```
</details>

<details>
<summary>☑️ 만든 리액트 사이트를 build하기</summary><br/>
여러분이 만든 사이트를 배포하려면 그냥 작업하던 App.js파일을 그대로 올리는게 아니라, build용 파일을 생성하신 후 올려야합니다. 왜냐면 웹 브라우저는 HTML/CSS/JS이 세개의 언어만 해석할 수 있기 때문에 리액트의 이상한 state, jsx이런거? 못알아듣습니다. 그래서 build를 통해 브라우저 친화적인 HTML/CSS/JS파일로 바꿔줘야합니다. 이걸 서버에 올려야 사용자들이 여러분의 사이트를 구경할 수 있습니다.
<br/><br/>
✔️ Q) 가지고 있는 웹 서버에 배포를 하고 싶어요.<br/>
리액트로 열심히 프로젝트 만들고 npm run build 입력하면 build/index.html 파일이 생성됩니다. <br/>
그리고 서버 API를 "어떤 놈이 메인페이지로 접속하면 /build/index.html 파일을 전송해라"라고 작성하면 됩니다.<br/><br/>

✔️ 배포하기 전 체크할 사항<br/>

(1) 에러만 안나면 됨<br/>
warning메시지는 사이트 구동에 큰 영향이 없어서 무시해도 됩니다.<br/>
(2) 경로 설정<br/>
http://miyoung.com/여기에 배포하는 경우에는 설정없이 대충해도 되지만, http://miyoung.com/blog/ 이런 하위 경로에 배포하고 싶으면 프로젝트에 설정이 따로 필요합니다. 여러분의 프로젝트 파일 중 package.json이라는 파일을 오픈해서

```
"homepage": "http://miyoung.com/blog",
```

이렇게 설정해주면 됩니다.<br/>
혹시 리액트 라우터가 설치되어있다면 라우터가 제공하는 basename=""속성을 추가하는게 라우팅이 잘될겁니다.
</details>

<details>
<summary>☑️ 만든 페이지를 깃헙에 배포하기</summary><br/>

(1) 컴파일(=build)하기<br/>
여러분의 리액트프로젝트에서 터미널에 "npm run build"입력<br/>
그러면 여러분의 작업 프로젝트 폴더 내에 build 폴더가 생기는데, 그 안에는 여러분이 짰던 코드가 전부 html/css/js파일로 변환되어 담겨있습니다. 이제 build안에 있는 내용을 모두 서버에 올리면 됩니다. 참고로 index.html이 메인페이지입니다.
<br/><br/>
(2) 깃허브에 배포용 레포지토리 파기<br/>
Github Pages는 특정한 이름의 리포지토리를 통해 정적 웹사이트를 호스팅할 수 있는 기능을 제공합니다. Github Pages를 사용하려면 레포지토리 이름을 특정 형식으로 지정해야합니다. 만약에 여러분의 Github 계정 아이디가 'username'이라고 가정하면, Github Pages를 사용하기 위해서는 다음과 같은 규칙을 따라야합니다. <br/>

- 개인 계정의 경우: 'username.github.io'라는 이름의 레포지토리를 만듭니다.<br/>
- 프로젝트나 조직 계정의 경우: 'organization.github.io'와 같이 조직 이름을 사용합니다.<br/>
이렇게 이름을 지정하면 Github는 해당 레포지토리를 Github Pages로 호스팅하게 됩니다. 따라서 정적 웹사이트를 배포하려면 이러한 이름의 레포지토리를 사용해야합니다.<br/><br/>

<img width="550px" src="https://github.com/SeoMiYoung/react-basic/assets/112063987/c3a2867c-a319-48fa-9e9a-84a8c3c05364"/>
<br/><br/>
(3) build 폴더 내의 파일을 전부 드래그 앤 드롭하기<br/>
🔊 주의: build 폴더 자체를 드래그 앤 드롭(x) build 폴더 안의 내용물을 드래그 앤 드롭(o)<br/>
<img width="550px" src="https://github.com/SeoMiYoung/react-basic/assets/112063987/ce06f55e-d378-4e8f-b475-810974fb678e"/>
<br/><br/>
(4) 끝<br/>
이제 10분정도 후에 https://여러분아이디.github.io라고 주소창에 입력하면 여러분의 사이트가 보입니다.
<br/><br/>

✔️ 이제 여러 repository를 동시에 호스팅해준다고 합니다.<br/>
일단, 기본적으로 예전에 만들었던 username.github.io라는 레포지토리를 지우면 안됩니다.<br/>
<br/>
(1) 아무 레포지토리나 만드세요. 이름은 자유입니다.<br/>
(2) 아까처럼 build내용을 드래그 앤 드롭하세요.<br/>
(3) repository setting 메뉴에 들어가서 Github pages부분에 들어갑니다.<br/>
<img width="550px" src="https://github.com/SeoMiYoung/react-basic/assets/112063987/0a6c17af-e8a0-4f28-a695-d75c2e526edf"/><br/>
형광펜 부분을 None이 아니라 main이런걸로 바꿔주세요.<br/>
(4) 끝<br/>
"username.github.io/repository이름/"으로 들어가시면 확인 가능합니다.<br/>
<br>

✔️ 첫 페이지 로딩 속도를 빠르게 하려면?<br/>
원래 리액트나 뷰로 만든 웹앱들은 첫 방문시 필요한 파일을 전부 로드합니다. 전송되는 파일 사이즈를 조금이라도 줄여서 빠르게 만들고 싶다면 컴포넌트들을 lazy하게 로딩하는 방법을 사용할 수도 있습니다. 공식 튜토리얼에 있는 lazy함수(https://legacy.reactjs.org/docs/code-splitting.html#route-based-code-splitting)를 참고하세요.<br/><br/>

✔️ build시 압축 시키지 말고 남기고 싶은 파일은?<br/>
여러분이 ./부터 시작하는 경로로 첨부한 이미지와 js파일들은 전부 찌부되고 이름이 변합니다. 이름이 변하게 하고 싶지 않으면 public폴더 안에 넣고 build하세요. 그러면 build하고 나서도 그대로 루트경로에 파일이 남아있습니다. (개발시 그런 파일들을 이용하고 싶다면, public폴더에 넣고 ./가 아닌 /경로로 import해오면 됩니다. 왜냐면 /의 기본 설정이 public이기 때문입니다.)<br/><br/>

✔️ 메인 페이지 말고 왜 특정 하위 페이지로 접속하면 404에러가 뜨죠?<br/>
어쩌구.github.io/detail/1 이런식으로 세부 페이지 URL을 주소창에 입력하면 찾는 페이지가 없어요~ 이렇게 에러가 날 수 있습니다. 이건 서버에서 "누군가 어쩌구.github.io/어쩌구로 접속하면 메인페이지로 안내하세요~"이런식으로 API개발을 해놓아야하는데, github는 우리가 서버를 만지고 어찌할 수 있는게 아니고 그냥 HTML파일 올린것만 사라락 보여주는 곳이기 때문에 사이트 메뉴에다가 페이지 이동버튼을 잘 만들어두면 되겠습니다. 아니면 url에 #기호가 붙는 hashRouter를 리액트라우터 코드짤 때 쓰든가요. 
</details>

<details>
  
<summary>☑️ public폴더에도 이미지를 보관 가능합니다.</summary><br/>
물론 src폴더에서 보통 가져다가 쓰는데, src에서 가져다가 쓰려면 항상 import를 해서 사용해야합니다. 근데 이미지가 만약에 100개가 준비되어있으면 100개를 다 import해와야하잖아요? 오바잖아요...? <br/>
그래서 public폴더에 이미지를 보관하면 바로 가져다가 쓸 수 있습니다. 여러분들이 리액트 코드를 다 짜면 사이트를 발행할거잖아요? 그러면 bundling을 통해서 여러분의 소스코드를 사이트 발행전에 한 코드로 압축합니다. 그래서 그 파일들을 서버에 올리거나 하시면 되는데, 그럴때 src내의 것들은 모두 압축이 되거나 파일명이 변합니다. 그런데 public폴더 안에있는건 압축이 되지 않습니다. <br/><br/>

✔️ public의 주의점<br/>
나중에 서브 경로에 발행하고 싶다면, (예를 들면 ming.com/어쩌구/) 그러면 경로에 문제가 생길 수 있습니다. 그때는 경로를 src="/어쩌구/logo.png"이렇게 설정해야될수도 있습니다. 이걸 맨날맨날 하기 귀찮으면 CRA 라이브러리 공식사이트에 들어가면 다음과 같이 코드를 짜면 된다고 알려줍니다.<br/>

```
<img src={process.env.PUBLIC_URL + '/logo.png'} /> 
```

이렇게 /어쩌구/를 뜻하는 process.env.PUBLIC_URL을 더해주면 된다고 합니다. ming.com/어쩌구/ 경로에 리액트로 만든 페이지를 배포할 일이 없다면 굳이 안해도 됩니다.
</details>

<details>
<summary>☑️ import, export 문법</summary><br/>
단순 변수뿐만 아니라 컴포넌트와 함수 등을 다른 파일로 빼서 효율적으로 코드를 작성할 수 있습니다.<br/>
만약에 App.js에서 data.js파일을 가져다가 쓰고 싶다면...?<br/><br/>

✔️ data.js에서 한개만 내보내고 싶다면?<br/>

```
// data.js
let a = 10;

export default a; // export default 변수명;
```
```
// App.js
import 작명 from './data.js'; // 작명은 자유롭게 하삼

function App() {
  return (
    <div>{작명}</div> 
  )
}
```
<br/>
✔️ data.js에서 여러개를 내보내고 싶다면?<br/>

```
// data.js
let a = 10;
let b = 20;

export default {a, b}; // export 여러개 하려면 export {변수1, 변수2}
```
```
// App.js
import {a, b} from './data.js'; // 단, 이 경우 작명 불가 (export했던 변수명 그대로 가져와야함)

function App() {
  return (
    <div>{a}</div>
  )
}
```
</details>

<details>
<summary>☑️ react-router-dom 라이브러리</summary><br/>
react-router-dom은 페이지 구분, 일명 라우팅을 매우 쉽게 도와줍니다. 설치방법은 터미널에 'npm install react-router-dom@6'이런식으로 입력해서 설치해주시면 됩니다. 이제 설명서대로 구글에 react-router-dom 6버전 설치방법해서 그대로 따라하시면 됩니다.
</details>

<details>
<summary>☑️ navigate 함수</summary>
useNavigate()라는 훅을 가져다가 사용할 수 있는데, 이건 페이지 이동을 도와줍니다. 보통 navigate라는 변수에다가 가져다가 사용합니다.<br/><br/>

✔️ Link로 페이지 이동 시<br/>
근데 Link로 했을때는 텍스트에 밑줄 그어진 형태로 페이지 이동 텍스트를 만들 수 있는데 너무 비기가 싫은거야..<br/>

```
{/* 페이지 이동 버튼은 Link */}
<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>
```

그래서 대신 navigate 함수를 사용합니다.<br/><br/>

✔️ Link로 페이지 이동 시<br/>

```
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Ming's Shoe Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </div>
  )
}
```
</details>

<details>
<summary>☑️ 여러 유사한 페이지가 필요할때 사용하면 좋은, Nested Routes</summary><br/>
다음 두 코드는 같은 코드를 의미합니다.<br/>

```
<Route path="/about" element={<About />} />
<Route path="/about/member" element={<About />} />
<Route path="/about/location" element={<About />} />
```
```
<Route path="/about" element={<About />}>
  <Route path="member" element={<About />} />
  <Route path="location" element={<About />} />
</Route>
```

✔️ Outlet 사용: nested routes를 보여줄 자리를 선정<br/>
nested routes를 사용하면 장점이 있는데요, 바로 nested route접속시엔 element가 2개나 보인다는 점입니다.<br/>
위의 코드에서 nested routes를 사용하지 않은 첫번째 코드에서는 './about/member'로 접속하면 './about'의 내용이 보이지 않습니다. 그러나 nested router를 사용하면 './about/member'를 접속하면 './about'와 './about/member'모두 보입니다.<br/>

```
function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet> {/* nested routes의 element를 보여주는 곳은 Outlet */}
    </div>
  )
}
```

```
<Route path="/about" element={<About />}>
  <Route path="member" element={<div>멤버임</div>} />
  <Route path="location" element={<div>로케이션임</div>} />
</Route>
```
</details>

<details>
<summary>☑️ styled-components</summary><br/>
원래는 이쁜 버튼 하나 만들고 싶으면 className 넣고, css파일도 가야하는데...어우..이게 너무 귀찮다 말이죠? 나는 css파일까지 가기 싫고, js안에서 모두 끝내고 싶다면, styled-component라이브러리를 사용하시면 됩니다.<br/><br/>

✔️ 장점<br/>
1. CSS파일을 굳이 안열어도 스타일링을 자바스크립트 안에서 해결 가능합니다.<br/>
2. 스타일이 다른 js파일로 오염되지 않습니다.<br/>
원래는 App.css에 적힌 스타일이 App.js뿐만 아니라 Detail.js등등에 반영이 됩니다. 왜냐면 리액트는 코드를 다 짜면 코드를 html끼리, css끼리, js끼리 합칩니다. 그래서 스타일을 모든 곳에서 다 가져다가 쓸 수 있는데요, 페이지의 사이즈가 커지면 단점이 될 수 있어서 styled components를 씁니다. <br/>
- 참고로, css파일을 만들때 여러분이 작명을 잘하면 이런 문제를 해결할 수 있는데요, '컴포넌트.module.css'이렇게 작명을 하면 굳이 styled components를 안써도 오염을 방지 가능합니다. <br/>
3. 로딩 시간이 단축됩니다. <br/>
왜냐하면 styled-components방식으로 적은 스타일들은 css파일들을 별도로 만들지 않고, html파일에서 style태그에 주입을 바로 해줄거에요. 그리고, 특정 페이지에 필요한 css만 로드를 할 수 있어서 로딩 시간 단축이 가능합니다.
</details>

<details>
<summary>☑️ 컴포넌트의 Lifecycle</summary><br/>
컴포넌트도 사람처럼 태어나고 죽는 과정이 있습니다...<br/>

<table>
  <tr>
    <th>mount</th>
    <td>페이지에 장착되기도 하고(컴포넌트가 보이는 순간)</td>
  </tr>
  <tr>
    <th>update</th>
    <td>가끔 업데이트도 되고(업데이트 == 재렌더링)</td>
  </tr>
  <tr>
    <th>unmount</th>
    <td>필요없으면 제거되고(다른 페이지로 돌려서 필요 없어지면?)</td>
  </tr>
</table>
이걸 왜 배우냐면요, 컴포넌트의 인생 주기 중간중간 간섭을 할 수 있습니다. <br/><br/>

✔️ Lifecycle hook 다는 법 (함수형 컴포넌트에서, 클래스형 방식은 따로 찾아보셈)<br/>
useEffect: mount/update시 여기 코드 실행됨

```
function Detail(props) {
  useEffect(()=>{
    console.log("안녕");
  })
}
```
그런데 위의 코드 실행시키면 안녕이 두 번 찍히는데 리액트상에서는 개발을 할 때, 원래 그렇습니다.. 디버깅을 위해서 useEffect는 그렇게 동작합니다. 실제 사이트를 발행하고 나서는 한번 동작하니깐 걱정마세요. 그게 싫으면 React.StrictMode 없애거나 하면 됩니다. 
<br/><br/>
✔️ useEffect의 간단한 동작 원리 - 왜 useEffect를 써야하는지 알 수 있음<br/>
useEffect는 실행 시점이 언제냐면, 랜더링이 다 되고 나서 실행이 됩니다. <br/>
그래서 10000번 도는 for문 이런건...너무 성능상 느릴 수 있으니깐 그런건 이미 다 랜더링 되고 나서 실행되게 useEffect안에 넣어주면 음...좋겠져? useEffect는 어려운 연산할때, 서버에서 데이터를 가져오는 작업할때, 타이머 장착할 때 사용하면 조~~~~~~~씁니다~<br/>
<br/>
✔️ useEffect의 간단 정리<br/>
```
useEffect(()=>{ ... })  // 1.재렌더링마다 코드 실행하고 싶으면
useEffect(()=>{ ... }, [])  // 2.mount시 1회 코드 실행하고 싶으면
useEffect(()=>{
  return ()=>{
    // 3. unmount시 1회 코드 실행하고 싶으면
    // 4. useEffect 실행 전에 뭔가 실행하려면 
  }
}, [])
```
</details>

<details>
<summary>☑️ Ajax</summary><br/>
✔️ Ajax쓰려면 옵션 3개 중 택1<br/>
1. XMLHttpRequest(옛날 자바스크립트 문법)<br/>
2. fetch(요즘 자바스크립트 문법)<br/>
3. Axios같은 외부 라이브러리 쓰거나..<br/>
<br/>
✔️ Axios<br/>
코드 작성을 쫌 더 짧게 할 수 있습니다. <br/><br/>
✔️ 동시에 ajax 요청을 여러개 하고 싶다면?<br/>
  
```
axios.get('/url1')
  .then(()=>{
    // 성공 시 코드
  })
axios.get('/url2')
  .then(()=>{
    // 성공 시 코드
  })
```

이렇게 동시에 ajax 요청을 하고싶은거죠.. 그럴때는 Promise를 사용해서 코드를 짜는 사람들이 있습니다.<br/>
```
Promise.all([ axios.get('/url1'), axios.get('/url2') ])
  .then(()=>{
    // 성공 시 코드
  })
```
그러면 2개의 url로 동시에 get 요청을 보낼 수 있습니다. 아까 위에처럼 axios각각 짜도 되는데, 그럴 경우에는 두 통신 모두 성공했을 경우에 코드를 짜는게 어려워집니다. 
<br/><br/>
✔️ 원래 서버랑 데이터를 주고받을 땐, 무조건 문자 자료형만 주고받을 수 있습니다.<br/>
그러나 약간의 편법으로 JSON을 사용하면 객체나 배열도 주고받을 수 있습니다. Axios의 경우 array로 자동으로 바꿔주기 때문에 굳이 변환 과정이 필요없습니다.<br/><br/>

✔️ fetch<br/>
fetch로도 get요청을 할 수 있습니다.
fetch는 js기본문법이기 때문에 외부 라이브러리를 가져다가 쓰고 그럴 필요가 없습니다. 근데 fetch의 경우 다음과 같이 코드를 짜줘야합니다.

```
fetch('https://~~~.json')
  .then(결과 => 결과.json())   // json변환 과정 필요
  .then(data => {})
```
</details>

<details>
<summary>☑️ 리액트의 automatic batching 기능</summary><br/>
  
```
function TabContent({tab}) {
  let [fade, setFade] = useState('');

  useEffect(()=>{
    setFade('end')}, 100);  // [2빠] state 변경 함수

    return ()=>{
      setFade('');  // [(순서상)1빠] state 변경 함수 
    }
  }, [tab])

  return (
    어쩌구
  )
}
```

위의 코드가 제대로 실행되지 않는 이유가 뭘까요? 리액트의 18버전 이상에서는 새로운 기능이 있습니다. 바로 리액트의 automatic batching 기능입니다. state를 변경하는 함수들이 근처에 있다면, 그것들을 다 합쳐서 최종적으로 state를 딱 한번만 변경해줍니다. 마지막에만 딱 한번 재랜더링을 시켜줍니다. 그러면 위의 예시에서는 [1빠]는 무시되고 [2빠]만 진행됩니다. 그래서 해결방법은 setTimeout으로 미세한 시간차를 두는 것 입니다. <br/>

```
function TabContent({tab}) {
  let [fade, setFade] = useState('');

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setFade('end'); // [2빠] state 변경 함수
    }, 10); 

    return ()=>{
      clearTimeout(timer);
      setFade('');  // [(순서상)1빠] state 변경 함수 
    }
  }, [tab])

  return (
    어쩌구
  )
}
```
</details>

<details>
<summary>☑️ Context API</summary><br/>
컴포넌트가 여러개 중첩되어 있으면 귀찮은 점이 있습니다. <br/>

<img width="300px" src="https://github.com/SeoMiYoung/react-basic/assets/112063987/87fa38e4-1592-4d3d-b444-002cea429b8d" />

이렇게 계속 props를 아래로 내려줘야하죠.. 이게 귀찮으면 Context API문법(리액트의 기본 문법)을 사용하거나 Redux같은 외부 라이브러리를 사용하면 됩니다.<br/>
그러나 실제에서는 성능 이슈(쓸데없는 재렌더링) 및 컴포넌트 재활용이 어렵다는 이슈로 잘 사용하지는 않습니다. 

</details>

<details>
<summary>☑️ Redux</summary><br/>
✔️ Redux의 state 변경하기<br/>
step1) state 변경해주는 함수를 store.js에 만들기 & export 하기<br/>
step2) export let { 함수명 } = 슬라이스명.actions<br/>
step3) 사용하는 곳에 dispatch(state변경함수())<br/>
- dispatch가 state변경함수 실행해달라고 store.js에게 부탁하는거임<br/><br/>
✔️ 왜이렇게 복잡할까?<br/>
만약에 컴포넌트 100개에서 직접 'kim'이라는 state를 변경하다가 갑자기 'kim'이 123이 되어버리는 버그가 발생하면 범인을 찾으려고 컴포넌트 100개를 다 뒤져야합니다. 근데 state 수정함수들을 store.js에 미리 만들어두고 컴포넌트는 그거 실행해달라고 부탁만 하는 식으로 코드를 짜놓으면 'kim'이 123이 되어버리는 버그가 발생했을 때, 범인 찾기가 수월합니다. 범인은 무조건 store.js에 있으니깐요. <br/><br/>
✔️ Redux Toolkit<br/>
참고로, 지금까지 배운건 Redux라기보다는, Redux Toolkit이라는 라이브러리 사용입니다. 예전에 Redux라는 라이브러리가 사용법이 더럽고 복잡했단 말이에요, 그래서 그걸 개선해서 나온게 Redux Toolkit입니다. 
</details>

<details>
<summary>☑️ 리액트에서 자주쓰는 조건문 패턴</summary><br/>
지금까지 JSX를 이용해서 html을 작성하고 있는데, if문을 써서 조건부로 html을 보여주고 싶을 때가 매우 많습니다. 지금까지는 삼항연산자만 주구장창 사용했었는데 또 어떤 if문들을 쓸 수 있는지 알아봅시다.<br/>
<br/>
✔️ return()안의 JSX내에서는 if문 사용 불가합니다.<br/>
그래서 보통 'return + JSX 전체'를 퉤하고 뱉는 if문을 작성해서 사용합니다.<br/>
  
```
function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } else {
    return null;
  }
}
```

✔️ switch / case 조건문은 JSX안에서 사용불가합니다.<br/>
그러나, if문을 연달아 써야하는 상황에서 코드를 단축시킬 수 있습니다.<br/><br/>

✔️ JSX안에서 삼항연산자를 쓸 수 있습니다.<br/>
조건문 ? 조건문 참일때 실행할 코드 : 거짓일 때 실행할 코드<br/>
삼항연산자는 중첩 사용도 가능합니다.<br/>
<br/>

✔️ && 연산자로 if역할 대신하기<br/>
&&: 첫번째 falsy값 찾음<br/>
||: 첫번째 truthy값 찾음<br/>
둘다 만약에 원하는 값을 발견하지 못하면, 마지막 값을 남겨줍니다.<br/>
이것도 JSX안에서 사용할 수 있습니다.
</details>

<details>
<summary>☑️ localStorage</summary><br/>
🤔 브라우저를 새로고침 하면 왜 state가 초기값으로 돌아가나요ㅠㅠ?<br/>
나도 정말 이게 너~~~무 궁금했어서 장바구니 페이지 만들 때 고민을 정말 많이 했는데, 원래 브라우저를 새로 고침하거나 재접속하면 html, js파일 등을 처음부터 다시 읽기 때문에 state도 초기값으로 다시 돌아갑니다. <br/>
<br/>

✔️ [해결 방법1] state를 서버로 보내서 DB에 영구 저장하기<br/>
그리고 state가 필요해질때마다 DB에서 가져오기!<br/>
근데 만약 나는 서버도 모르겠고, DB를 만드는 방법도 모르겠다면? --> 로컬 스토리지 사용하기<br/>

✔️ [해결 방법2] Local Storage<br/>
위치: 개발자도구 -> Application -> Storage -> Local Storage<br/>
- 브라우저에서 제공하는 반영구적 저장소<br/>
- key와 value형태로 저장 가능<br/>
- 최대 5MB의 문자 데이터만 저장 가능<br/>
- user가 브라우저를 청소하지 않는 이상 반영구적으로 남아있음<br/>
<br/>
✔️ 모든 state를 localStorage에 자동 저장해주는 redux-persist<br/>
리덕스를 쓰는 사람들은 redux-persist라는 외부 라이브러리를 사용하면 redux안에 있는 모든 state들을 자동으로 로컬 스토리지에 저장해줍니다. 물론 리덕스 뿐만 아니라 다른 전역 상태 관리(Jotai, Zustand)툴도 찾아보면 비슷한 기능들이 있습니다.
</details>

<details>
<summary>☑️ react-query</summary><br/>
🤔 리액트 쿼리가 언제 필요하죠?<br/>
서버랑 통신하는 기능들을 AJAX로 짜다보면, 응용기능들이 필요해질때가 있습니다. 예를 들자면.. AJAX 성공시/실패시 다른 UI를 보여주고 싶다면 어떻게 할건가요? 아니면 몇초마다 자동으로 AJAX를 요청하는 코드를 어떻게 작성하죠? 아니면 AJAX요청이 실패했을 때, 자동으로 몇초후에 AJAX요청을 재시도하려면요? 아니면 다음페이지의 내용을 미리 가져온다(prefetch)던지..이런 응용사항들은 잘 생각하면 알아서 코드를 짤 순 있긴 합니다. 그런데 이런것들이 귀찮다면, React Query라는 라이브러리를 가져다가 쓰면 됩니다. 그걸 가져다가 쓰면 적은 코드로 위와 같은 응용 기능들을 구현할 수 있습니다. 
<br/>=> 그런데 솔직히 말하자면, 굳이 react-query를 쓸 일이 없습니다. <br/>
=> 실시간 SNS를 만들 때처럼 실시간 데이터를 몇초마다 계속 가져와야하는 사이트들이 쓰면 유용합니다. (그러나 대부분의 사이트는 그러지 않습니다)
<br/><br/>

✔️ [장점1] ajax 성공/실패/로딩중을 변수 하나로 쉽게 파악이 가능하다<br/>

```
  // react-query를 이용해서 ajax 요청을 해보자
  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json')
      .then((a)=>{
        return a.data
      })
  })

  // 중괄호랑 return은 묶어서 생략 가능합니다.(아래 코드는 위와 동일합니다.)
  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a)=>{
        return a.data
      })
  )

  // result에는 이 ajax와 관련된 여러가지 유용한 정보들이 담겨있습니다.
  console.log(result.data); // ajax요청이 성공했을때의 data가 담김
  console.log(result.isLoading); // ajax요청이 로딩중일때 true가 될거임
  console.log(result.error); // 이 ajax 요청이 실패했을 때 true가 될거임
  
```

이런걸 react-query 안쓰고 그냥 하려고 했다면, 아마 state를 여러분들이 직접 만들어서 사용해야 했을거에요. <br/><br/>

✔️ [장점2] 틈만나면 알아서 AJAX 재요청(refetch)을 해준다<br/>
useQuery로 감싸주시면, useQuery(react-query라는 라이브러리가 제공하는 기본 함수)안의 ajax요청은 틈만나면 자동으로 재요청됩니다.<br/>

```
// react-query를 이용해서 ajax 요청을 해보자
let result = useQuery('작명', ()=>{
  return axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{
      return a.data
    })
  }
)

// staleTime
// 5초 안에는 재접속을 해도 refetch가 되지 않는 기능 추가 가능
let result = useQuery('작명', ()=>{
  return axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{
      console.log('요청됨')
      return a.data
    })
  }, { staleTime : 5000 }
)
```
<br/>
✔️ [장점3] 실패 시 재시도를 알아서 해준다<br/>
서버가 죽었거나, 경로가 잘못되었을 경우 등 문제가 생겼을때 ajax요청을 알아서 3~4번 재시도를 해줍니다.<br/><br/>

✔️ [장점4] ajax로 가져온 결과는 state 공유가 필요없다<br/>
만약에 부모 컴포넌트와 자식 컴포넌트 모두 A라는 데이터를 필요했을 때, 물론 부모가 자식한테 props로 전달해서 사용할수도 있지만, 부모 컴포넌트에서도 ajax요청해서 A가져오고, 자식 컴포넌트에서도 ajax요청해서 A가져올 수 있습니다. 후자의 경우, 의문점이 들 수 있는데, ajax요청을 똑같은 곳으로 하는 코드가 두군데나 있어서 비효율적인거 아니야?하고 걱정할 수도 있는데, 리액트 쿼리는 똑똑해서 똑같은 곳으로 두번이나 요청하지 않습니다. 아마 합쳐서 한번에 처리를 해줄겁니다. 그래서 그냥 props전송할 거 없이 ajax요청하는 코드 한줄 더 적으면 되는거에요. 즉, ajax요청을 한군데에만 하든, 두군데에서 하든 요청 횟수는 일치하다.<br/><br/>
그리고 캐싱이라는 기능이 있는데, ajax성공 결과를 5분동안 기억해둡니다. 그래서 만약에 똑같은 경로로 ajax요청하는 코드가 실행이 된다면 5분전에 이미 요청했던 결과를 우선적으로 보여줍니다. 그다음에 ajax요청을 수행할거에요. 그러면 약간 빠른 느낌을 줄 수 있습니다. <br/><br/>

✔️ RTK Query<br/>
redux-toolkit을 설치하면 RTK Query도 자동설치됩니다. 이거 가져다가 쓰시면 리액트 쿼리랑 유사한데, 문법이 드러워서 그냥 리액트 쿼리 쓰는게 낫습니다..
</details>

<details>
<summary>☑️ 성능개선</summary><br/>
✔️ React Developer Tools (크롬 확장 프로그램)<br/>
  
![image](https://github.com/SeoMiYoung/react-basic/assets/112063987/4fd4b9d4-53a2-43d4-8e80-2bac1c2b61a2)
<br/>
- [개발자 도구] Components 탭 --> 여러분들의 사이트의 컴포넌트를 구조화시켜줌 (디버깅 하기가 쉬울수도)<br/>
현재 선택한 것에 해당된 컴포넌트도 알려주고, props, hooks등등 여러 정보를 알려줍니다.<br/>

- [개발자 도구] Profiler 탭 --> 성능저하되는 컴포넌트 범인 찾기<br/>
녹화버튼 누르고 페이지를 막 이리저리 이 페이지 저페이지 막 눌러봐. 녹화를 멈추면, 컴포넌트마다 몇초에 걸처서 렌더링 되었는지 확인해볼 수 있습니다. 그런데 실은 여러분의 컴포넌트 렌더링 시간은 보통 엄청 빠릅니다. 보통 웹사이트에서 지연을 발생시키는 원인은 서버에서 데이터가 늦게와서입니다. 이건 사실상...서버문제지, 프론트엔드 문제는 아닙니다..그러니 너무 걱정 마세요!
<br/><br/>

✔️ Redux DevTools (크롬 확장 프로그램)<br/>
리덕스 관련 탭을 개발자도구에서 열 수 있습니다.<br/>
store를 한 눈에 보여주고, state 변경한 내역을 알려줍니다.<br/>
<br/>

✔️ lazy import<br/>
리액트로 개발한 사이트들은 기본적으로 SPA(Single Page Application)입니다. SPA의 특징이 뭐냐면, 이 웹사이트를 서버에 올려서 발행을 하면, 하나의 큰 JS파일과 HTML, CSS파일이 있을거에요. 이것들을 서버에 올리면 되는데, 하나의 JS파일에 정말 모든 걸 다 때려넣기 때문에 사이즈가 매우 클 수 밖에 없습니다. 그래서 유저가 메인페이지에 접속했을 때, 커다란 JS파일을 다운받아야하기 때문에 로딩속도가 쫌 느립니다.. 하나의 큰 자바스크립트 파일때문에 그런데요, 이 JS를 잘게 분할하고 싶다면??<br/><br/>
=> 그래서 우선적으로 필요하지 않은 컴포넌트의 경우 lazy하게 로딩하라고 코드를 짤 수 있습니다. 그러면 아마 lazy loading한 건 별도의 js파일로 생성될거에요. <br/>

```
// 해당 컴포넌트가 필요해지면 import 시켜주세요~
const Detail = lazy(() => import('./routes/Detail.js'));
const Cart = lazy(() => import('./routes/Cart.js'));

// -> 그러나 Detail, Cart 페이지 접속 시 지연시간이 있을 수 있다는 단점이 있음...로딩 중 UI를 넣으면 됨!
```

✔️ 로딩 중 UI를 어떻게 넣을까?<br/>
import { lazy, Suspense } from 'react'를 한다음에, Suspense 컴포넌트로 Detail과 Cart를 감싸면 됩니다. <br/>

```
<Route path="/detail/:id" element={
  <Suspense fallback={<div>로딩중임</div>}>
    <Detail shoes={shoes}/>
  </Suspense>
} />

// 근데 사실 대부분 라우트 안에 있는 모든 컴포넌트들을 lazy loading하기 때문에 그냥 Routes전체를 Suspense로 묶는편임
<Suspense fallback={<div>로딩중임</div>}>
  <Routes>
  </Routes>
</Suspense>
```

그러면 Detail 페이지가 다 로드되기 전까지 유저는 로딩중임이라는 화면을 보게 됩니다. <br/><br/>

✔️ 재렌더링을 막는 memo, useMemo<br/>

```
function Child() {
  return <div>자식임</div>
}

function Parent() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child></Child>
      <button onClick={()=>{ setCount(count+1) }}>+</button>
    </div>
  )
)
```

지금 위의 예시를 보면, 버튼을 클릭했을때, 당연히 부모의 상태가 변하니깐 Parent가 계속 재랜더링되는데, Child 컴포넌트는 변하지도 않는데 계속 재랜더링 해야해서 비효율적이고 낭비인 걸 확인할 수 있습니다. 그래서 이럴 때 재렌더링을 막는 memo, useMemo를 쓸 수 있습니다.<br/><br/>

(1) memo<br/>
- Child로 전달되는 props가 변할때만 재렌더링 시켜줌<br/>
- 그래서, 항상 Child는 랜더링되기 전에 이전 props와 현재 props를 비교하기 때문에 재랜더링 여부를 결정해서, 오히려 성능상 손해일수도 있습니다. 그래서 오히려 props가 길고 복잡하면 오히려 손해일수도 있습니다. 그러니, 꼭 필요한 무거운 컴포넌트에만 붙여보는게 좋습니다. 사실 대부분은 붙일 일이 없습니다.

```
import { memo } from "react";

// memo로 해당 컴포넌트는 꼭 필요할때만 재랜더링 시켜주세요~~라는 의미임
let Child = memo(function() {  // 이런식으로 해도 똑같이 컴포넌트가 생성됩니다
  return <div>자식임</div>
})

function Parent() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count}></Child>
      <button onClick={()=>{ setCount(count+1) }}>+</button>
    </div>
  )
)
```

(2) useMemo<br/>

```
function 반복() {
  return 반복문 10억번 돌린 결과
}

function Cart() {
  let result = 반복(); // Cart가 재랜더링 될때마다 10억번 맨날 계산해야함;;;;
  .....
}
```

그래서 다음과 같이 개선 가능합니다.

```
import { useMemo } from "react";

function 반복() {
  return 반복문 10억번 돌린 결과
}

function Cart() {
  // useMemo안의 함수는 컴포넌트 렌더링 시 1회만 실행해줍니다.
  let result = useMemo(()=>{return 함수()});
  // 참고로, 얘도 dependency넣을 수 있습니다. useMemo(()=>{return 함수()}, [count])
    // dependency를 넣을 경우 useEffect와의 차이점은 실행시점밖에 없음
}
```

✔️ 리액트가 업데이트되고 나서 쓸 수 있는 신기능 3가지<br/>
리액트 18버전 이후부터 렌더링 성능이 저하되는 컴포넌트에서 쓸 수 있는 혁신적인 기능이 추가되었습니다.<br/><br/>
(1) batching<br/>
state 변경을 연달아서 실행하면, 마지막 state 변경만 실행되는 걸 의미합니다.<br/>
(리액트17) ajax, setTimeout 이런데 안에서 state1변경(); state2변경(); state3변경(); 이런다면, batching이 일어나지 않았으나, 리액트 18부터는 어디에서든지 automatic batching이 일어납니다.<br/>
<br/>
(2) useTransition<br/>
동작이 느린 컴포넌트를 성능 향상시킬 수 있습니다. 다음은 재렌더링이 느린 컴포넌트 입니다. 유저가 타이핑 할때마다 저 엄청난 div태그가 10000번이나 재랜더링됩니다..브라우저는 멀티가 안되는데, 브라우저가 할 일이 많아서 멘붕와서 느려집니다. (1) a를 <input>에 보여주기, (2) <div>를 만개나 만들기...이거를 한번에 하려니 브라우저가 머리터지죠.

```
import {useState} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  
  return (
    <div>
      <input onChange={ (e)=>{ setName(e.target.value) }}/>
      {
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}
```

이걸 어떻게 바꿀 수 있을까요? startTransition안에 있는 코드를 약간 늦게 처리해줍니다. 그러면 (1)번이 끝난 후, 한가할 때 (2)를 하기 때문에 성능을 향상할 수 있습니다.

```
import {useState, useTransition} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  let [isPending, startTransition] = useTransition() // isPending은 startTransition이 아직 처리중일때 true로 변함
  
  return (
    <div>
      <input onChange={ (e)=>{ 
        startTransition(()=>{ // startTransition으로 문제의 state 변경(지연의 원인) 감싸기
          setName(e.target.value) 
        })
      }}/>

      {
        isPending ? '로딩중' :
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}
```

(3) useDeferredValue<br/>
그냥 useTransition하고 똑같은디요..

```
let state = useDefferedValue(state); // 여기에 넣은 state(props)는 변동사항이 생겼을 때, 늦게 처리가 됩니다.
```
</details>
