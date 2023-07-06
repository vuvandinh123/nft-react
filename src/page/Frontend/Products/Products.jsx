import React, { useState } from 'react'
import ProductList from '../../../components/ProductList'
import Slick from '../../../components/Slick'
import Filter from '../../../components/Filter/Filter'
import { useLocation, useParams } from 'react-router'

const Products = () => {
    const { page } = useParams()
    const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
    const page1 = searchParams.get('page')
    const [filterkey, setFilterkey] = useState('')
    const [filterQty, setFilterQty] = useState(18)
    const [filterCategory, setFilterCategory] = useState(null)
    const [filterPrice, setFilterPrice] = useState({
        min: null,
        max: null,
    })
    const handleBlurPrice = (obj) => {
        setFilterPrice({ min: obj.min, max: obj.max })
    }
    const handleChangeSearch = (value) => {
        setFilterkey(value)
    }
    const handleChangeQty = (value) => {
        setFilterQty(value)
    }
    const handleChangeCategory = (value) => {
        console.log(value);
        if(value==0){
            setFilterCategory(null)
        }
        else{
            setFilterCategory(value)
        }
    }
    var params = {
        populate: '*',
        pagination: {
            page: page1 || 1,
            pageSize: filterQty,

        },
        filters: {
            productName: {
                '$contains': filterkey ? filterkey : null,
            },
            price: {
                '$gte': filterPrice.min ? filterPrice.min : null,
                '$lte': filterPrice.max ? filterPrice.max : null,
            },
            category: {
                id: {
                    '$eq': filterCategory ? filterCategory : null
                }
            }
        }
    }
    const paramsCategory = {
        populate: '*',
    }
    return (
        <div>
            <div className="container">
                <div className="row categorys">
                    <Filter handleChangeSearch={handleChangeSearch} handleChangeQty={handleChangeQty} handleBlurPrice={handleBlurPrice} handleChangeCategory={handleChangeCategory} />

                    <div className="col-md-9">
                        <h1 className='text-white'>Colllection results</h1>
                        <div className="row  multiple-items">
                            <Slick  paramsCategory={paramsCategory}/>
                        </div>
                        <div className='d-flex justify-content-between my-5'>
                            <h2 className=''>All results for <span className='text-danger'>Product</span></h2>
                            <span>123.242 items</span>
                        </div>
                        <ProductList params={params} page={page1} filterQty={filterQty} filterKey={filterkey} filterPrice={filterPrice} filterCategory={filterCategory} navigation={true} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products