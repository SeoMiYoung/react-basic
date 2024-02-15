import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={props.imgSrc} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    )
}

export default Card;