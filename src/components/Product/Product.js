import './Product.css'

import React from 'react';

const Product = (props) => {
    let { name, img, seller, price, stock } = props.product;
    return (
        <div className="Product-Container">
            <div className="Product-Image">
                <img src={img} alt="" />
            </div>
            <div className="Product-Details">
                <h3>{name}</h3>
                <p>By : {seller}</p>
                <h4>${price}</h4>
                <p>Only {stock} left in stock - order soon.</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;