import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router'
import { productApi } from '../../../Api/productApi'
const index = () => {
  const { id } = useParams()
  const [product,setProduct] = useState([])
  const params = {
    populate:'*'
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await productApi.get(id,params);
      setProduct(response.data.data)
    }
    fetchData()
  }, [id])
  let getProduct = {
    name:product.attributes?.productName,
    price:product.attributes?.price,
    description:product.attributes?.description,
    image:product.attributes?.image.data[0].attributes.url,
  }
  return (
    <div>
        <ProductDetail {...getProduct}/>
    </div>
  )
}

export default index