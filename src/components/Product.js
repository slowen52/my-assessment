import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
//import image from './chronograph.png'

const Product = ({ price, inventory, title}) => 
    (
        <div>
        <div className = "row justify-content-between p-4 pb-0">
            <div> 
            <h3> {title} </h3>
        {inventory ? `  '${inventory} items' ` : null} </div>
        <div>
            <h6 > {price} </h6> </div>
        </div>
        </div>

    )

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}


export default Product
