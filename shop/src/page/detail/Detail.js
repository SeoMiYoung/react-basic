import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';


function Detail(props) {
    let [visible, setVisible] = useState(true);

    useEffect(()=>{ // mount, update시 코드 실행해주는 useEffect
        // Detail 페이지 방문 후 2초 지나면 <div> 숨기기
        let timer = setTimeout(() => {
            setVisible(false); // 2초 후에 상태를 false로 변경
        }, 2000);

        // useEffect가 실행되기 전에 실행되는 return
        return () => {
            // clean up function (기존 코드 싹 치운다)
            // ex. 기존 타이머는 싹 제거해주세요~
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
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;