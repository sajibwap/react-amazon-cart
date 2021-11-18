/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { getStoredCart } from "../Utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  
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

  return [cart,setCart];
}
export default useCart;