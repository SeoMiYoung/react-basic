import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setName, plusAge } from '../../store/userSlice.js';
import { plusCount } from '../../store/userCart.js';

function Cart() {
    // getState에는 Redux store에 있던 state가 남습니다
    let getState = useSelector((state)=>{
        return state
    }); // Redux store 가져와줌
    let dispatch = useDispatch(); // store.js로 요청을 보내주는 함수임


    return (
        <div>
            <h6>
                {getState.user.name}
                {getState.user.age}
                의 장바구니
            </h6>
            <button onClick={(()=>{
                dispatch(plusAge(3))
            })}>
                버튼
            </button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {getState.userCart.map((item, index)=>
                        <tr key={index}>
                            <td>{getState.userCart[index].id}</td>
                            <td>{getState.userCart[index].name}</td>
                            <td>{getState.userCart[index].count}</td>
                            <td>
                                변경하기
                                <button onClick={()=>{
                                    let i = getState.userCart.findIndex(item => item.id == getState.userCart[index].id);
                                    dispatch(plusCount(i));
                                }}>+</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>                 
        </div>
    )
}

export default Cart;