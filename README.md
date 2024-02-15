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
