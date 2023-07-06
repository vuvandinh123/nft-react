import React from 'react'
import Product from './Product'
import './Product.scss'

const index = (props) => {
  
  return (
    <div><Product {...props} /></div>
  )
}

export default index