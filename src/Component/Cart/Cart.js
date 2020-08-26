import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce ((total, crs) => total + crs.price , 0)

    return (
        <div>
            <h5>Item(s) Ordered: {cart.length}</h5>
            
            <ul>
            
            <h5 className ="h">Ordered Items:</h5>
            {
                   cart.map(cart => <li>{cart.name}
                   <br/>
                    Price: {cart.price} $</li>)
            }
            </ul>
            <h5>Total Ammount: {total}$</h5>
        </div>
    );
};

export default Cart;