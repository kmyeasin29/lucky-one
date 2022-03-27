// // import React, { useState } from 'react';
// import { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    return (
        <div className='cart'>
            <h3>Shopping Cart</h3>
            {
                cart.map(phone => <h4 key={phone.id}>{phone.name}</h4>)
            }
            <div>
                <button>CHOOSE 1 FOR ME</button>
                <button>RESET CART</button>
            </div>

        </div>
    );
};

export default Cart;