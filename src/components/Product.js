import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
//import image from './chronograph.png'

const Product = ({ price, inventory, title, quantity, isCart}) => 
    (
        <div>
        {isCart ? 
         <img src = {title + '.png'} alt ="image" className = "img-fluid"/> 
        : null}
  
        <div className = "row justify-content-between p-4 pb-0"> 
            <div> 
            <h3 style = {{fontFamily: 'Chivo'}}> {title} </h3>
        <p style ={{fontFamily: 'HelveticaNeue', color: '#9B9B9B',fontSize:'13'}}>{inventory ? `  ${inventory} REMAINING ` : null} </p> </div>
        {isCart ?
        <h5> Amount: {quantity}</h5>
        : null}        
<div> 
            <h5 style = {{fontFamily: 'Chivo', fontWeight: '300'}}> &#36;{price} </h5> </div>
        </div>


</div>

    )

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
    quantity: PropTypes.number,
    isCart: PropTypes.bool
}


export default Product
