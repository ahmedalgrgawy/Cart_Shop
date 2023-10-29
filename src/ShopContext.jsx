import React, { createContext, useState } from 'react'
import { PRODUCTS } from './products';

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {

    const getCartInitValue = () => {
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setItems] = useState(getCartInitValue());

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

                totalPrice += cartItems[item] * itemInfo.price;

            }
        }
        return totalPrice;
    }

    const addToCart = (itemId) => {
        setItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCart = (newAmount, itemId) => {
        setItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const passedContextValues = { cartItems, addToCart, removeFromCart, updateCart, getTotalPrice }

    return (
        <ShopContext.Provider value={passedContextValues}>
            {props.children}
        </ShopContext.Provider>
    )
}
