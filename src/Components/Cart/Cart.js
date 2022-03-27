// // import React, { useState } from 'react';
// import { useState } from 'react';
// import { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    // const { random, setRandom } = useState()
    const chooseRandomly = () => {
        (Math.floor(Math.random() * cart.length));
        // setRandom(afterClick, cart[afterClick])
    }

    return (
        <div className='cart'>
            <h3>Shopping Cart</h3>
            {
                cart.slice(0, 4).map(phone => <div key={phone.id} className='cart-item'><img src={phone.img} alt="" />  <h4 key={phone.id}>{phone.name}</h4></div>)
            }
            <div>
                <button onClick={chooseRandomly}>CHOOSE 1 FOR ME</button>
                <button>RESET CART</button>
            </div>

        </div>
    );
};

export default Cart;