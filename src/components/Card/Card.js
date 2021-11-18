import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {name,price,stock,star,seller,img} = props.product;
    const iconArrow = <FontAwesomeIcon icon={faCartArrowDown} />

  
    return (
        <div className="card  border border-primary mb-2">
            <div className="card-horizontal">
                <div className="card-img-left">
                    <img src={img} alt="hero" />
                </div>
                <div className="card-body text-start">
                    <h6>{ name }</h6>
                    <p><b>Seller : </b> {seller} <span><b>Rating :</b> {star}</span></p>
                    <p><b>Stock : </b>Only {stock} items left in stock</p>
                    <p><b>Price : </b> {price}</p>
                    <button className="btn btn-sm btn-danger" 
                    onClick={()=>props.HandleClick(props.product)}>
                        {iconArrow} Add To Cart 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;