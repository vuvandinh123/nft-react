import React, { useEffect, useState } from 'react'
import Content from '../../../components/Backend/Products/Content'
import { productApi } from '../../../Api/productApi';
import { useLocation, useParams } from 'react-router';

const index = () => {
    const [publicState,setPublicState] = useState('preview')
    const [pageSize,setPageSize] = useState(10)
    const [search,setSearch] = useState(null)
    let pageNum = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page1 = searchParams.get('page')
    pageNum = Number(pageNum.pageNum)
    const handlePageSize = value =>{
        setPageSize(value)
    }
    const filterKeySearch = value =>{
        setSearch(value)
    }
    function handleChangeStatus(value){
        setPublicState(value)
    }
    var params = {
        populate: '*',
        publicationState:publicState,
        pagination: {
            page: page1 || 1,
            pageSize:pageSize,
        },
        filters:{
            productName:{
                '$contains':search
            },
            publishedAt:
            {
                '$eq':null,
            }
            
        },
        'sort':['id:desc'],
    }
    
    return (
        <>
        <Content params={params} filterKeySearch={filterKeySearch} handlePageSize={handlePageSize} pageNum={page1} handleChangeStatus={handleChangeStatus}/>

        </>
    )
}

export default index
