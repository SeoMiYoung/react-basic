# 📢 레포지토리 설명
리액트 공부

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

