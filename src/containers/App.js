import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


const App = () => (
  <div>
    <div className = "row pt-3 justify-content-between">
        <h2 className = "col-md " style = {{fontFamily: 'Chivo', fontWeight: '700'}}>Acme Store</h2>
        <div className = "col-sm d-flex align-items-center">
            <button data-toggle="modal" data-target="#myModal" className = "row justify-content-end">
                <img src= {'cart.svg'} className = "pr-1 pt-1"/> 
                <p style = {{fontFamily: 'Chivo', margin: "0"}}> Your cart is empty </p>  
            </button>
        </div>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
