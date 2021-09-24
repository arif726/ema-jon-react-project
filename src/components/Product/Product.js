import './Product.css'

import React from 'react';

const Product = (props) => {
    let { name, img, seller, price, stock } = props.product;
    return (
        <div className="Product-Container">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                {name};
                <p>By : {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon.</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;