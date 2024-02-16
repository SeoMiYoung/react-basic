import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useParams } from "react-router-dom";

function Detail(props) {
    let { id } = useParams(); // 현재 url의 파라미터 정보들이 남음(모르겠으면 구글링 ㄱㄱ)
    let imgNum = parseInt(id)+1;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + imgNum + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;