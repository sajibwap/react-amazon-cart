import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    
    let totalQty = 0;
    let totalAmount = 0;

    for(const product of cart){
        if(!product.qty){
            product.qty = 1;
        }
        totalQty    = totalQty + product.qty;
        totalAmount = totalAmount + product.price * product.qty;
    }

    const shipping = totalAmount > 0 ? 20 : 0;
    const beforTax = totalAmount + shipping;
    const tax      = totalAmount > 0 ? (( totalAmount + shipping ) * 0.15) : 0;
    const subTotal = totalAmount > 0 ? (totalAmount + shipping + tax) : 0;
    return (
        <div className="cart-data border border-primary">
            <h4><u>Order Summery</u></h4>
            <h5>Total Products : {cart.length}</h5>
            <h5>Item Ordered : {totalQty}</h5>
            <small><b>Total Price :</b> <span>$ { totalAmount.toFixed(2) }</span></small><br />
            <small><b>Shipping : </b><span>{shipping}</span></small><br />
            <small><b>Total before tax: : </b><span>{beforTax.toFixed(2)}</span></small><br />
            <small><b>Estimated Tax: : </b><span>{tax.toFixed(2)}</span></small><br />
            <small><b>Total AfterTax : </b><span>{subTotal.toFixed(2)}</span></small><br />
            <p></p>
            { props.children }
            <p></p>
        </div>
    );
};

export default Cart;