import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Shop.css'
const Shop = () => {
    const [phones, setPhones] = useState([]);
    const [cart, setCart] = useState([])
    // console.log(cart);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])

    const handleAddToCart = (phone) => {
        // console.log(phone);
        const newCart = [...cart, phone]
        setCart(newCart)
    }
    return (

        <div>
            <h1>NOKIA PHONE COLLECTION</h1>

            <div className="shop">

                <div className="products-container">
                    {
                        phones.map(phone => <Phone
                            key={phone.id}
                            phone={phone}
                            handleAddToCart={handleAddToCart}
                        ></Phone>)
                    }

                </div>
                <div className="cart-container">
                    {/* {
                        cart.map(item => <Cart></Cart>)
                    } */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;