import { configureStore, createSlice } from '@reduxjs/toolkit'

// state 하나를 slice라고 함
let user = createSlice({ // useState랑 비슷한 용도
    name : 'user',
    initialState : 'ming',
    // Redux의 state 변경하는 법
        // 1. state 수정해주는 함수 만들기
        // 2. 원할 때 그 함수 실행해달라고 store.js에게 요청
    reducers : {
        setName(state) { // state는 기존 state
            return 'seo mi young'
        },
        함수1() {

        },
        함수2() {
            
        }
    }
})

let userCart = createSlice({ // user가 장바구니에 추가한 상품들
    name : 'userCart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ] 
})

export default configureStore({
  reducer: { // 등록하기
    user : user.reducer, // 작명 : state명.reducer
    userCart : userCart.reducer
  }
}) 