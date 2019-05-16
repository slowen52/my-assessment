import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


const App = () => (
  <div>
    <div className = "row justify-content-between pt-3">
    <h2 style = {{fontFamily: 'Chivo', fontWeight: '700'}}>Acme Store</h2>
    <div className = "row">
    <img src= {'cart.svg'}/> 
    <p className= "m-3"style = {{fontFamily: 'Chivo'}}> Your cart is empty </p> </div>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
