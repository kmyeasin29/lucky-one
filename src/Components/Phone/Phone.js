import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import './Phone.css'

const Phone = (props) => {
    const { handleAddToCart } = props;
    const { name, img, price } = props.phone
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <h5>Price: ${price}</h5>
            </div>
            <button onClick={() => handleAddToCart(props.phone)} className='cart-button'>
                <p className='btn-txt'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Phone;