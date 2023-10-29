import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../ShopContext"
import { CartItem } from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

    const { cartItems, getTotalPrice } = useContext(ShopContext);

    let totalPrice = getTotalPrice();

    const navigate = useNavigate()

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalPrice > 0 ?

                <div className='checkout'>

                    <p>Total Price: ${totalPrice}</p>

                    <button onClick={() => navigate('/')}>Continue Shopping</button>

                    <button>Checkout</button>

                </div>

                : <h1>Your Cart Is Empty</h1>}

        </div>
    )
}
