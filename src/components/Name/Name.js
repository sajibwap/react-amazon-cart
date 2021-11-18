import React from 'react';
import "./Name.css"

const Name = (props) => {
    const { name, img, qty} = props.product;
    return (
        <div className="name-container">
            <img src={img} alt="hero"/>
            <p>{name}</p>
            <span>{qty}</span>
        </div>
    );
};

export default Name;