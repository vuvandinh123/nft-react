// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductList from './ProductList'
import './ProductList.scss'

const index = (props) => {
  return (
    <div className='box'><ProductList {...props}/></div>
  )
}

export default index