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
        isCart = {true}
        key={product.id}
      />
    )
  ) : (
    <p style ={{fontFamily: 'HelveticaNeue', color: '#9B9B9B',fontSize:'21px', textAlign: "center"}}>Please add some products to cart.</p>
  )
  if(hasProducts){
  return (
      <div className = "modal fade" id= "myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className = "modal-content">
      <div className= "modal-header"> 
            <h3 className="modal-title" style = {{fontFamily: 'Chivo', fontWeight: '700'}}>Your Cart</h3>
            <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className = "modal-body">
      <div>{nodes}</div>
      </div>
      <div className="modal-footer">
      <div className = "container p-0">
      <div className = "d-flex flex-column">
      <div> 
        <h5>Total: &#36;{total}</h5></div>
     
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'} className = "checkButton">
        Checkout
      </button> </div></div></div>  
    </div>
    </div>
      </div>
  )} else{
       return (
      <div className = "modal fade" id= "myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className = "modal-content">
      <div className= "modal-header"> 
            <h3 className="modal-title" style = {{fontFamily: 'Chivo', fontWeight: '700'}}>Your Cart</h3>
            <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className = "modal-body" style ={{height: "200px", width:"500px"}}>
           <div className = "container">
           <div className = "row">
           <div className="col" style= {{textAlign: "center"}}> 
           <svg width="95" height="76" viewBox="0 0 95 76" xmlns="http://www.w3.org/2000/svg">
            <g id="v2" fill="none" fillRule="evenodd">
            <g id="Desktop-Copy-2" transform="translate(-593 -458)" fill="#9B9B9B"
            fillRule="nonzero">
            <g id="Empty-State" transform="translate(469 458)">
                <path d="M218.298,21.566 C217.923,21.038 217.316,20.724 216.667,20.724 L143.682,20.724 L138.288,1.461 C138.047,0.597 137.259,-9.23705556e-14 136.362,-9.23705556e-14 L126,-9.23705556e-14 C124.896,-9.23705556e-14 124,0.896 124,2 C124,3.104 124.896,4 126,4 L134.846,4 L147.448,49.007 C142.824,49.08 139.083,52.859 139.083,57.5 C139.083,62.187 142.896,66 147.583,66 L150.146,66 C149.815,66.782 149.632,67.641 149.632,68.542 C149.632,72.149 152.567,75.084 156.173,75.084 C159.78,75.084 162.715,72.149 162.715,68.542 C162.715,67.641 162.531,66.782 162.201,66 L183.379,66 C182.965,66.858 182.726,67.816 182.726,68.832 C182.726,72.439 185.661,75.374 189.267,75.374 C192.873,75.374 195.808,72.439 195.808,68.832 C195.808,67.817 195.569,66.859 195.155,66 L198.668,66 C199.772,66 200.668,65.104 200.668,64 C200.668,62.896 199.772,62 198.668,62 L147.582,62 C145.101,62 143.082,59.981 143.082,57.5 C143.082,55.019 145.101,53 147.582,53 L150.078,53 C150.079,53 150.08,53 150.081,53 C150.082,53 150.083,53 150.085,53 L206.823,53 C207.825,53 208.647,52.26 208.793,51.299 L218.555,23.384 C218.769,22.772 218.673,22.095 218.298,21.566 Z M189.266,71.372 C187.865,71.372 186.725,70.232 186.725,68.83 C186.725,67.428 187.865,66.288 189.266,66.288 C190.667,66.288 191.807,67.428 191.807,68.83 C191.807,70.232 190.667,71.372 189.266,71.372 Z M158.714,68.54 C158.714,69.941 157.573,71.082 156.172,71.082 C154.771,71.082 153.631,69.942 153.631,68.54 C153.631,67.138 154.771,65.998 156.172,65.998 C157.573,65.998 158.714,67.139 158.714,68.54 Z M212.295,29.166 L198.532,29.166 L199.163,24.723 L213.849,24.723 L212.295,29.166 Z M208.856,39 L197.135,39 L197.964,33.167 L210.897,33.167 L208.856,39 Z M205.36,49 L195.714,49 L196.566,43 L207.459,43 L205.36,49 Z M181.427,49 L181.427,43 L192.526,43 L191.673,49 L181.427,49 Z M167.181,49 L166.328,43 L177.427,43 L177.427,49 L167.181,49 Z M151.599,49 L149.919,43 L162.288,43 L163.14,49 L151.599,49 Z M181.427,29.166 L181.427,24.723 L195.122,24.723 L194.491,29.166 L181.427,29.166 Z M193.923,33.166 L193.094,38.999 L181.427,38.999 L181.427,33.166 L193.923,33.166 Z M177.427,29.166 L164.362,29.166 L163.731,24.723 L177.426,24.723 L177.426,29.166 L177.427,29.166 Z M177.427,33.166 L177.427,38.999 L165.76,38.999 L164.931,33.166 L177.427,33.166 Z M161.719,39 L148.799,39 L147.165,33.167 L160.89,33.167 L161.719,39 Z M159.69,24.724 L160.321,29.167 L146.046,29.167 L144.802,24.724 L159.69,24.724 Z"
                id="Shape" />
            </g>
        </g>
    </g>
</svg> </div>
           </div>
           
      <div className = "row">
           <div className="col-md">{nodes}</div>
           </div></div>
    </div>
    </div>
    </div>
      </div>
  )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart


