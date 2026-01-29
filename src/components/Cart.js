// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                    ))}
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;