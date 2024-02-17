import { configureStore, createSlice } from '@reduxjs/toolkit';
import { user, setName, plusAge } from './userSlice.js';
import { userCart, plusCount } from './userCart.js';


export default configureStore({
  reducer: { // 등록하기
    user : user.reducer, // 작명 : state명.reducer
    userCart : userCart.reducer
  }
}) 