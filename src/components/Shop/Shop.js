import React,{ useEffect, useState } from 'react';
import { addToDB, getStoredCart } from '../../Utilities/fakedb';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom'
import './Shop.css'
import Name from '../Name/Name';
import '../Name/Name.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [searchedProduct,setSearchedProduct] = useState([]);

    useEffect(()=>{
        fetch("./products.json")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setSearchedProduct(data);
        })
    },[]);

    /**
     * Display local Storage Cart to UI
     */

    useEffect(()=>{
        const getStorageProducts = getStoredCart();
        
        if(products.length){ //=> if true  
            const storeInCart = [];
            for(const key in getStorageProducts){
                const findProduct = products.find(product=>product.key===key);

                //set quantity to object from localeStorage
                if(findProduct){
                    findProduct.qty = getStorageProducts[key];
                    storeInCart.push(findProduct);
                }
            }
            
            setCart(storeInCart);
        }
        
    },[products])

    const HandleClick = (productData)=>{
       const exists = cart.find(product => product.key === productData.key);
       let newCart = [];
       if (exists) {
           let rest = cart.filter(product => product.key !== productData.key);
           exists.qty = exists.qty + 1;
           newCart = [...rest,productData];
       }else{
            productData.qty = 1;
            newCart = [...cart,productData];
       }
       setCart(newCart);
       // Adding to LocaleStorage
       addToDB(productData.key);
       
    }

    const handleSearch = event =>{
        let searchText = event.target.value
        const matchedProduct = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedProduct(matchedProduct);
    }
    return (
        <>
        <div className="search-container">
            <div className="container">
                <input 
                type="text" 
                placeholder="Search Item"
                onChange={handleSearch}
                />
            </div>
        </div>
        <div className="container">
            <h2>Total data : {searchedProduct.length}</h2>
            <div className="shop-container"> 
                <div className="card-deck">
                    {searchedProduct.map(each => <Card 
                    key={each.key} 
                    product={each}
                    HandleClick={HandleClick}
                    ></Card>)};
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/order">
                            <button className="btn btn-sm btn-warning">Order Reviw</button>
                        </Link>
                        <p></p>
                        { 
                            cart.map(product=> <Name 
                                key={product.key} 
                                product={product}></Name> )
                        }
                    </Cart>
                </div>
            </div>
        </div>
        </>
    );
};

export default Shop;