import { createSlice } from '@reduxjs/toolkit';

let userCart = createSlice({ // user가 장바구니에 추가한 상품들
    name : 'userCart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        plusCount(state, action) {
            state[action.payload].count++;
        }
    }
})

let { plusCount } = userCart.actions;

export { userCart, plusCount };