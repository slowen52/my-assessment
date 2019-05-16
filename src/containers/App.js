import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


const App = () => (
  <div>
    <div className = "row justify-content-between">
    <h2>Acme Store</h2>
    <button> Your cart is empty </button>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
