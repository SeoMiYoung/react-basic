import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    let navigate = useNavigate();
    
    const handleCardClick = () => {
        if(localStorage.getItem('recent') != null) {
            // 1. 정보 꺼내기
            let 꺼낸거 = JSON.parse(localStorage.getItem('recent'));
    
            // 2. 중복 검사
            // '꺼낸거' 배열의 마지막 요소가 props.shoes.id와 다른 경우만 저장소에 추가
            if(꺼낸거[꺼낸거.length - 1] !== props.shoes.id) {
                꺼낸거.push(props.shoes.id);
            }
    
            // 3. 다시 넣기
            localStorage.setItem('recent', JSON.stringify(꺼낸거));
        }
        else {
            localStorage.setItem('recent', JSON.stringify([props.shoes.id]));
        }

        // 페이지 이동
        navigate('./detail/'+props.shoes.id);
    }
    return (
        <div className="col-md-4" onClick={handleCardClick}>
            <img src={props.imgSrc} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    )
}


export default Card;