import React, { useEffect, useState } from 'react'
import ProductList from '../../../components/ProductList/ProductList'
import { useParams } from 'react-router'
import { categoryApi } from '../../../Api/categoryApi'

const Categorys = () => {
  const {id} = useParams('id')
  const [category,setCategory] = useState('')
  useEffect(()=>{
    const factData = async ()=>{
      const resul = await categoryApi.get(id)
      setCategory(resul.data.data.attributes.categoryName)
    }
    factData()
  },[id])
  console.log(category);
  var params = {
    populate: '*',
    pagination: {
        page:  1,
        pageSize: 18,

    },
    filters: {
        category: {
            id: {
                '$eq': id ? id : null
            }
        }
    }
}
  return (
    <div className='container'>
      <h1 className='text-center text-uppercase'>{category}</h1>
      <ProductList params={params} style="grid-5"   navigation={true} />
    </div>
  )
}

export default Categorys