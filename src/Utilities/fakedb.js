// Local Storage Database

export const addToDB = (id) => {
    const getItem = getDB();
    let shoppingCart = {}
    if(!getItem){
        shoppingCart[id] = 1;
    }else{
        shoppingCart = JSON.parse(getItem);
        if(shoppingCart[id]){
            let increament = shoppingCart[id] + 1;
            shoppingCart[id] = increament;
        }else{
            shoppingCart[id] = 1;
        }
    }
    updateDB(shoppingCart);
}

export const getDB = () => {
    return localStorage.getItem('shopping-cart');
}

export const updateDB = cart => {
    localStorage.setItem('shopping-cart',JSON.stringify(cart));
}

export const removeFromDB = id => {
    const exists = getDB();
    if(exists){
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDB(shopping_cart);
    }
}
export const getStoredCart = () => {
    const exists = getDB();
    return exists ? JSON.parse(exists) : {} ;
}
export const clearTheCart = () => {
    localStorage.removeItem('shopping-cart');
}