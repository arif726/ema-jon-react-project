import './CartDetails.css'
import React from 'react';

const CartDetails = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = product.shipping;
    }
    const beforeTax = total + shipping;
    const tax = beforeTax * .10;
    const grandTotal = beforeTax + tax;

    return (
        <div className="Cart-Details">
            <div className="Order">
                <h2>Order Summary</h2>
                <h4>Items Ordered : {cart.length}</h4>
            </div>
            <div className="Total-Table">
                <div>
                    <h5>Items : </h5>
                    <h5>Shipping : </h5>
                    <h5>Total before tax : </h5>
                    <h5>Estimated tax : </h5>
                    <h2>Order Total : </h2>
                </div>
                <div>
                    <h5>${total.toFixed(2)}</h5>
                    <h5>${shipping.toFixed(2)}</h5>
                    <h5>${beforeTax.toFixed(2)}</h5>
                    <h5>${tax.toFixed(2)}</h5>
                    <h2>${grandTotal.toFixed(2) }</h2>
                </div>
            </div>
            <button>Review Order</button>
        </div>
    );
};

export default CartDetails;