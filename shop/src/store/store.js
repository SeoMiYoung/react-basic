import { configureStore, createSlice } from '@reduxjs/toolkit'
import { user, setName, plusAge } from './userSlice.js'


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