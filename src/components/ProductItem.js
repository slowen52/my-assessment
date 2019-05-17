import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
//import './chronograph.png'



const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className='row rounded' style={
    { marginBottom: 20, 
    backgroundColor: 'white'}
    }>
<div  className = 'col-md-4 p-0'>
    <img src = {product.title + '.png'} alt ="image" className = "img-fluid rounded-left"/> </div>
    <div className = 'col-md justify-content-between'>
    <Product
      title={product.title}
      price = {product.price}
      inventory={product.inventory} />
    <button
//        onMouseEnter={() => setButtonHovered(true)} 
//        onMouseLeave={() => setButtonHovered(false)}
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'} className = "Button" >
      {product.inventory > 0 ? 'ADD TO CART' : 'Sold Out'}
    </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
