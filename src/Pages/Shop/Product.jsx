import React, { useContext } from 'react'
import { ShopContext } from "../../ShopContext"
export const Product = (props) => {

    const { id, productName, price, productImage } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (

        <div className='product'>

            <img alt='' src={productImage}></img>

            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    ${price}
                </p>
            </div>
            <button onClick={() => addToCart(id)} className='addToCartBtn'>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>

        </div>

    )
}
