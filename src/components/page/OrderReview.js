import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, removeFromDB } from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReviewCard from '../OrderReviewCard/OrderReviewCard';
import '../Shop/Shop.css'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const history = useHistory();
    
    const handlePlaceOrder = () => {
        history.push('/Shipping');
        setCart([]);
        clearTheCart();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleRemove = (key) => {
        const newCart = cart.filter(product=> product.key !== key);
        setCart(newCart);
        /* Removed from Locale Storage */
        removeFromDB(key);
    }


    return (
        <div className="container">
            <div className="shop-container"> 
                <div className="card-container">
                    {
                    cart.length ? cart.map(product => <OrderReviewCard 
                    key={product.key} 
                    product={product}
                    handleRemove={handleRemove}
                    />) : 
                    <h1>No items in the cart</h1>
                    };
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        { cart.length ? <button 
                            onClick={handlePlaceOrder} 
                            className="btn btn-regular"
                        >Place Order</button> : "" }
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;