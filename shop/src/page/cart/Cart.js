import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    // getState에는 Redux store에 있던 state가 남습니다
    let getState = useSelector((state)=>{
        return state.user
    }) // Redux store 가져와줌
    console.log(getState.user);
    console.log(getState.stock);

    return (
        <div>
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
                    <tr>
                    <td>1</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    </tr>
                </tbody>
            </Table>                 
        </div>
    )
}

export default Cart;