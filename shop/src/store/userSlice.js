import { createSlice } from '@reduxjs/toolkit';


// state 하나를 slice라고 함
let user = createSlice({ // useState랑 비슷한 용도
    name : 'user',
    initialState : { name : 'ming', age: 25 },
    // Redux의 state 변경하는 법
        // 1. state 수정해주는 함수 만들기
        // 2. 원할 때 그 함수 실행해달라고 store.js에게 요청
    reducers : {
        setName(state) { // state는 기존 state
            // array나 object의 경우 직접 수정해도 state가 변경됩니다.
            // 결론: state가 array나 object면 return없이 직접 수정해도 됩니다.
            // 왜냐면 Immer.js의 도움을 받아서(자동으로 설치되는 라이브러리)
            state.name = 'seo'
        },
        plusAge(state, action) {
            // action에는 여러가지 정보들이 있음
            // state 변경함수들을 action이라고 함
            state.age = state.age + action.payload;
        }
    }
})

// user.actions하면 state 변경 함수들 남음
// export 하고 싶은 함수명들을 넣어주면 됨
let { setName, plusAge } = user.actions;

export { user, setName, plusAge };