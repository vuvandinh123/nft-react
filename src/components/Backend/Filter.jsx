import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox'
import { categoryApi } from '../../Api/categoryApi';

const Filter = (props) => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await categoryApi.getAll({ populate: "*" });
            setCategory(response)
        }
        fetchData()
    }, [])
    const handleChangeSelect = (value) => {
        console.log(value);
    }
    const handlePageSize = e =>{
        props.handlePageSize(e.target.value)
    }
    const handleStatus = (e) => {
        props.handleStatus(e.target.value)
        console.log(e.target.value);
    }
    const filterKeySearch = (e) => {
        props.filterKeySearch(e.target.value)
    }
    return (
        <div className='d-flex justify-content-between align-items-center my-4'>
            <div className='d-flex mx-3'>
                <select style={{ width: '100px' }} name="" onChange={handleStatus} className='form-select fs-5 p-2 me-3' id="">
                    <option defaultValue value="preview">All</option>
                    <option value="live">live</option>
                </select>
                <SelectBox handleChangeSelect={handleChangeSelect} idName='' data={category.data?.data} />
                <select onChange={handlePageSize}  style={{ width: '100px' }} name=""  className='form-select fs-5 p-2 mx-3' id="">
                    <option defaultValue value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>

            <div>
                <input type="text" onChange={filterKeySearch} placeholder='Search products...' className='form-control p-2 fs-5' />
            </div>
        </div>
    )
}

export default Filter
