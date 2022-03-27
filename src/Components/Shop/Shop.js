import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Shop.css'
const Shop = () => {
    const [phones, setPhones] = useState([]);
    const [cart, setCart] = useState([]);
    // const { random, setRandom } = useState();
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
        if (cart.length >= 4) {
            alert("You already Selected 4 Items")
        }
    }

    //changed
    // const chooseRandomly = () => {
    //     afterClick = (Math.floor(Math.random() * cart.length));
    //     setRandom(cart[afterClick])
    // }

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
                    <Cart cart={cart}></Cart>
                    <div>
                        {/* <button onClick={chooseRandomly}>CHOOSE 1 FOR ME</button> */}
                        {/* <button onClick={() => setRandom("")}>RESET CART</button> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;