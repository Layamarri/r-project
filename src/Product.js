// // Product.js
// import React, { useState, useEffect, useContext } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { CartContext } from './context/Cartcontext';

// export const Product = () => {
//     const [product, setProduct] = useState([]);

//     // Access addToCart function from CartContext
//     const { addToCart } = useContext(CartContext);

//     useEffect(() => {
//         getProductsDetails();
//     }, []);

//     const getProductsDetails = async () => {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const productsData = await response.json();
//         setProduct(productsData);
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 {product.map((item, index) => (
//                     <div key={index} className="col-md-4 mb-4 mt-2">
//                         <div className="card" style={{ width: '20rem', height: '420px' }}>
//                             <img 
//                                 src={item.image} 
//                                 alt={item.title} 
//                                 className="card-img-top" 
//                                 style={{ height: '250px', objectFit: 'cover' }} 
//                             />
//                             <div className="card-body">
//                                 <h5 className="card-title">{item.title.slice(0, 10)}</h5>
//                                 <p className="card-text">{item.description.slice(0, 100)}</p>
//                                 <span className="card-text">Price: ${item.price}</span>
//                                 <button 
//                                     className='btn btn-primary ms-3' 
//                                     onClick={() => addToCart(item)}  // Pass each item to addToCart
//                                 >
//                                     Add
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// Cart.js
// Product.js
import React, { useState, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from './context/Cartcontext';

export const Product = () => {
    const item = [
        { id: 1, name: "Product 1", desc: "This is a dummy description", price: 30, img: "https://images.pexels.com/photos/12737808/pexels-photo-12737808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, name: "Product 2", desc: "This is a dummy description", price: 80, img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, name: "Product 3", desc: "This is a dummy description", price: 70, img: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, name: "Product 4", desc: "This is a dummy description", price: 90, img: "https://images.pexels.com/photos/25947310/pexels-photo-25947310/free-photo-of-close-up-of-a-barista-holding-two-iced-coffees.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, name: "Product 5", desc: "This is a dummy description", price: 50, img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 6, name: "Product 6", desc: "This is a dummy description", price: 40, img: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 7, name: "Product 7", desc: "This is a dummy description", price: 80, img: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 9, name: "Product 8", desc: "This is a dummy description", price: 60, img: "https://images.pexels.com/photos/28895994/pexels-photo-28895994/free-photo-of-delicious-pancakes-with-whipped-cream-and-chocolate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 10, name: "Product 8", desc: "This is a dummy description", price: 60, img: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 11, name: "Product 8", desc: "This is a dummy description", price: 60, img: "https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 12, name: "Product 8", desc: "This is a dummy description", price: 60, img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 13, name: "Product 8", desc: "This is a dummy description", price: 60, img: "https://images.pexels.com/photos/9609834/pexels-photo-9609834.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    
    
    
    ]
    

    const [product] = useState(item);
    const { cartItems, addToCart } = useContext(CartContext);

    // Check if item is in the cart
    const isInCart = (id) => cartItems.some(item => item.id === id);

    // Format price to USD currency format
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    };

    return (
        <div className="container">
            <div className="row">
                {product.map((item) => {
                    const productInCart = isInCart(item.id);

                    return (
                        <div key={item.id} className="col-md-4 mb-4 mt-2 ">
                            <div className="card" 
                                 style={{ 
                                    width: '20rem', 
                                    height: '420px', 
                                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', 
                                    backgroundColor: 'transparent', 
                                    color: 'white', 
                                    transition: 'transform 0.3s ease' 
                                 }}
                                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="card-img-top" 
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.desc}</p>
                                    <div className='d-flex justify-content-between'>
                                    <span className="card-text">Price: {formatPrice(item.price)}</span>

                                    <span><button
                                        className={`btn ${productInCart ? 'btn-secondary' : 'btn-success'} ms-3`}
                                        onClick={() => addToCart(item)}
                                    >AddToCart
                                        
                                    </button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
