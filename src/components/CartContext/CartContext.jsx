import React, { useState, createContext } from "react";

export const cartContext = createContext([]);

const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let product = cart.find(x => x.id === item.id);
            let pos = cart.indexOf(product);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(x => x.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const cartSum = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price, 0);
    }

    return (
        <cartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartSum}}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextProvider;