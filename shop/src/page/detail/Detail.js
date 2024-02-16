import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail(props) {
    let { id } = useParams(); // 현재 url의 파라미터 정보들이 남음(모르겠으면 구글링 ㄱㄱ)
    let imgNum = parseInt(id)+1;
    let product = props.shoes.find(item => item.id == id);

    return (
        <div className="container">
            <Box>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
            </Box>
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