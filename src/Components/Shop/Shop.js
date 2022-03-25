import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Shop.css'
const Shop = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return (

        <div>
            <h1>NOKIA PHONE COLLECTION</h1>

            <div className='shop'>
                <div className="products-container">
                    {
                        phones.map(phone => <Phone
                            key={phone.id}
                            phone={phone}
                        ></Phone>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h3>Order Summery</h3>
            </div>
        </div>
    );
};

export default Shop;