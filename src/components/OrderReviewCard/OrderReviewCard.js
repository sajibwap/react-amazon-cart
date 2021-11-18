import React from 'react';
import '../Card/Card.css';

const Name = (props) => {
    const {key, name, price, img, qty} = props.product;
    const {handleRemove} = props;

    return (
        <div className="card border border-primary">
        <div className="card-horizontal">
            <img src={img} alt="hero"/>
            <div className="card-data text-start p-1">
                <h5>{ name }</h5>
                <p><b>Price : </b> {price}</p>
                <p><b>Quantity</b> : {qty}</p>
                
                <hr/>
                <button className="btn btn-sm btn-warning" 
                onClick={()=>handleRemove(key)}>
                     Remove Item 
                </button>
            </div>
        </div>
        </div>
    );
};

export default Name;