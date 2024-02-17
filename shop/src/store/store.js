import { configureStore, createSlice } from '@reduxjs/toolkit'

// state 하나를 slice라고 함
let user = createSlice({ // useState랑 비슷한 용도
    name : 'user',
    initialState : 'ming'
})

let stock = createSlice({ // useState랑 비슷한 용도
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
  reducer: { // 등록하기
    user : user.reducer, // 작명 : state명.reducer
    stock : stock.reducer
  }
}) 