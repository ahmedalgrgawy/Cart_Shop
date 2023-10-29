import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from "../../ShopContext"

export const CartItem = (props) => {

    const { id, productName, price, productImage } = props.data;

    const { cartItems, addToCart, removeFromCart, updateCart } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img alt='' src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    ${price}
                </p>

                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCart(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}
