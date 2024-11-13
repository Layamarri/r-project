import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { Product } from "./Product";
import { Cart } from "./Cart";

import { Login } from "./Login";
import { CartProvider } from "./context/Cartcontext";

function App() {


  return (
    <div className="App">

    <CartProvider>
      <BrowserRouter>
        <div className="App-header">
          <div >
            <h1 className="heading">Shopping Card</h1>
          </div>
          <div className="link">
            <Link to="/Product" className="btn btn-dark m-2">Product</Link>
            <Link to="/Login" className="btn btn-dark m-2">Login</Link>
            <Link to="/cart" className="btn btn-dark m-2">Cart</Link>
          </div>
        </div>

        <div>
          <Routes>
            <Route index element={<Product />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />

          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>


    </div>
  );
}
export default App;
