import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
    <div>
    {children}
    </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
