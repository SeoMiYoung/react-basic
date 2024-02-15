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

</details>
