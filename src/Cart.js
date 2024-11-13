// // Cart.js
// import React, { useContext } from 'react';
// import { CartContext } from './context/Cartcontext';

// export const Cart = () => {
//     const { cartItems, removecartitem } = useContext(CartContext);

//     return (
//         <div className="container">
//             <h2>Your Cart</h2>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <div className="row">
//                     {cartItems.map((item, index) => (
//                         <div key={index} className="col-md-4 mb-4 mt-2">
//                             <div className="card" style={{ width: '20rem', height: '420px' }}>
//                                 <img 
//                                     src={item.image} 
//                                     alt={item.title} 
//                                     className="card-img-top" 
//                                     style={{ height: '250px', objectFit: 'cover' }} 
//                                 />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{item.title.slice(0, 10)}</h5>
//                                     <p className="card-text">Price: ${item.price}</p>
//                                     <button 
//                                         className="btn btn-danger"
//                                         onClick={() => removecartitem(item)}
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// Product.js
import React, { useContext } from 'react';
import { CartContext } from './context/Cartcontext';

export const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="row">
                    {cartItems.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4 mt-2">
                            <div className="card" style={{ width: '20rem', height: '420px', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', 
                                    backgroundColor: 'transparent', 
                                    color: 'white',  }}>
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="card-img-top" 
                                    style={{ height: '250px', objectFit: 'cover' }} 
                                />
                                <div></div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <div className="d-flex ">
                                        <button 
                                            className="btn btn-secondary btn-sm me-2"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            className="btn btn-secondary btn-sm ms-2"
                                            onClick={() => addToCart(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div >
                                    <button 
                                        className="btn btn-danger "
                                        onClick={() => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};
