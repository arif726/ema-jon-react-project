import './CartDetails.css'
import React from 'react';

const CartDetails = () => {
    return (
        <div className="Cart-Details">
            <div className="Order">
                <h2>Order Summary</h2>
                <h4>Items Ordered : </h4>
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
                    <h5>${ }</h5>
                    <h5>${ }</h5>
                    <h5>${ }</h5>
                    <h5>${ }</h5>
                    <h2>${ }</h2>
                </div>
            </div>
            <button>Review Order</button>
        </div>
    );
};

export default CartDetails;