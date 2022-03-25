import React from 'react';
import './Phone.css'

const Phone = (props) => {
    const { name, img, price } = props.phone
    return (
        <div>
            <div className="product">
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <h5>Price: ${price}</h5>
        </div>
    );
};

export default Phone;