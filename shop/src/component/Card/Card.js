import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    let navigate = useNavigate();
    
    return (
        <div className="col-md-4" onClick={()=>{
            navigate('./detail/'+props.shoes.id)
        }}>
            <img src={props.imgSrc} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    )
}

export default Card;