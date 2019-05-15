import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
//import image from './chronograph.png'

const Product = ({ price, inventory, title}) => 
    (
    <div className = 'row'>
    <div  className = 'col'>
<img src = {title + '.png'} alt ="image" style={{height:200}}/> </div>
    <div className = 'col'>
    {title} - &#36;{price}{inventory ? `  ${inventory} items` : null} </div>
  </div>
    )

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}


export default Product
