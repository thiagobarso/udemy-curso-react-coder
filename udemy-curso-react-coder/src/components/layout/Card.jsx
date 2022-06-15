import React from "react";
import "./Card.css";

const Card = (props) => {

    const cardStyle = {
        backgroundColor : props.color || '#0F0',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;