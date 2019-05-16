import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
      <div className = "modal fade" id= "myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className = "modal-content">
      <div className= "modal-header"> 
            <h3 className="modal-title">Your Cart</h3>
            <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className = "modal-body">
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      </div>
      <div className="modal-footer">
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button> </div>
    </div>
    </div>
      </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
