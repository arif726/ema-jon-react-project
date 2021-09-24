import React, { useEffect, useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handlAddToCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div div className="Shop-Container" >
            <div>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handlAddToCart={handlAddToCart}>
                    </Product>)
                }
            </div>
            <div>
                <CartDetails
                    cart={cart}>
                </CartDetails>
            </div>
        </div>
    );
};

export default Shop;