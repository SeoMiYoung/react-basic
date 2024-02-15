import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
        <div>
            <div className="col-md-4">
            <img src={props.imgSrc} width="80%" />
            <h4>{props.shoes[props.index].title}</h4>
            <p>{props.shoes[props.index].price}</p>
          </div>
        </div>
    )
}

export default Card;