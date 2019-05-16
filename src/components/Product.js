import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
//import image from './chronograph.png'

const Product = ({ price, inventory, title}) => 
    (
        <div className = "row justify-content-between p-4 pb-0">
            <div> 
            <h3 style = {{fontFamily: 'Chivo'}}> {title} </h3>
        <p style ={{fontFamily: 'Helvetica Neue', color: '#9B9B9B',fontSize:'13'}}>{inventory ? `  ${inventory} REMAINING ` : null} </p> </div>
        <div>
            <h5 style = {{fontFamily: 'Chivo', fontWeight: '300'}}> &#36;{price} </h5> </div>
        </div>

    )

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}


export default Product
