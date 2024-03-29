import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
// import '../../App.css';
import { Context1 } from '../../App.js';
import { useDispatch, useSelector } from 'react-redux';
import { plusProduct } from '../../store/userCart.js';

function Detail(props) {
    let getState = useSelector((state)=>{
        return state;
    });
    let dispatch = useDispatch();

    let { storage, shoes } = useContext(Context1); // 보관함을 해체해주는 함수, object형식으로 남음

    let [visible, setVisible] = useState(true);
    let [tab, setTab] = useState(0);
    
    useEffect(()=>{ // mount, update시 코드 실행해주는 useEffect
        // Detail 페이지 방문 후 2초 지나면 <div> 숨기기
        let timer = setTimeout(() => {
            setVisible(false); // 2초 후에 상태를 false로 변경
        }, 2000);

        // useEffect가 실행되기 전에 실행되는 return
        return () => {
            // clean up function (기존 코드 싹 치운다)
            // ex. 기존 타이머는 싹 제거해주세요~
            // 또는 기존 데이터 요청은 제거해주세요~
            // [메모] clean up function은 mount시 실행안되고, unmount시 실행됨
            clearTimeout(timer); 
        }
    }, []); // 빈 배열을 전달하여 마운트 시에만 실행되도록 합니다
    // []는 dependency로, useEffect의 실행 조건을 넣을 수 있습니다.


    let { id } = useParams(); // 현재 url의 파라미터 정보들이 남음(모르겠으면 구글링 ㄱㄱ)
    let imgNum = parseInt(id)+1;
    let product = props.shoes.find(item => item.id == id);
    
    return (
        <div className="container">
            {visible 
            ? <div className="alert alert-warning">
                2초 이내 구매 시 할인
            </div> 
            : null}
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + imgNum + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        // console.log(product.id);
                        dispatch(plusProduct(product)); // 누른 상품의 product 정보 전달
                    }}>주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setTab(0);
                    }}
                    eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setTab(1);
                    }}
                    eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setTab(2);
                    }}
                    eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* if문은 jsx안에서 못쓰기 때문에 컴포넌트로 가져와 */}
            <TabContent tab={tab} setTab={setTab}/>
            {storage}
        </div> 
    )
}

function TabContent(props) {
    let { storage, shoes } = useContext(Context1); // 보관함을 해체해주는 함수, object형식으로 남음

    let { tab } = props;
    let [fade, setFade] = useState('');

    useEffect(()=>{
        // 0.1초후에 코드
        setTimeout(()=>{
            setFade('tabEnd');
        }, 100);

        // clean up function
        return ()=>{
            setFade('');
        }
    }, [tab]); // tab이 변경될때마다 실행

    return (
        <div className={'tabStart '+fade}>
            {
                [<div>{storage}</div>, <div>내용1</div>, <div>내용2</div>][tab]
            }
        </div>
    )
}


export default Detail;