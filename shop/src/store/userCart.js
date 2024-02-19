import { createSlice } from '@reduxjs/toolkit';

let userCart = createSlice({ // user가 장바구니에 추가한 상품들
    name : 'userCart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        plusCount(state, action) {
            // payload와 같은 id가진 상품을 찾기
            let findNum = state.findIndex((data)=>{
                return data.id == action.payload
            })
            state[findNum].count++;
            console.log(state);
        },
        plusProduct(state, action) {
            const existingProduct = state.findIndex(item => item.id == action.payload.id);
            
            if (existingProduct != -1) { // 이미 해당 id존재
                state[existingProduct].count++;
                console.log('이미 해당 id가 존재합니다');
                console.log(state);
            }
            else { // 새로운 상품
                state.push({
                    id: action.payload.id,
                    name: action.payload.title,
                    count: 1
                });
                console.log('새로운 상품이 들어왔습니다');
                console.log(state);
            }
        
        }
    }
})

let { plusCount, plusProduct } = userCart.actions;

export { userCart, plusCount, plusProduct };