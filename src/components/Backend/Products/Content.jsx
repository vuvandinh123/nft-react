import React, { useEffect, useState } from 'react'
import { productApi } from '../../../Api/productApi';
import { AppUrl } from '../../../Api/AppUrl';
import { Link } from 'react-router-dom';
import Filter from '../Filter';
import Pagination from '../../Paginate/Pagination';

const Content = (props) => {
    const [products, setProducts] = useState([]);
    const [del, setDel] = useState(null);
    const [isDel, setIsDel] = useState(false)
    const [status, setStatus] = useState({ id: null, publicAt: null })
    const [isStatus, setIsStatus] = useState(false)
    const [totalPage, setTotalPage] = useState(1)
    const handleClickDelete = (id) => {
        setDel(id)
        setIsDel(true)
    }
    const handleClickStatus = (id, publicAt) => {
        if (publicAt == null) {
            setStatus(prevState => ({ ...prevState, id: id, publicAt: Date.now() }));
            setIsStatus(true);
        } else {
            setStatus(prevState => ({ ...prevState, id: id, publicAt: null }));
            setIsStatus(true);
        }
    }
    const handleStatus = (value) => {
        props.handleChangeStatus(value)
    }
    const handlePageSize = (value) => {
        props.handlePageSize(value)
        console.log(value);
    }
    const filterKeySearch = value => {
        props.filterKeySearch(value)
    }
    useEffect(() => {
        const fetchData = async () => {
            if (isDel) {


                const respone = await productApi.del(del);
                setIsDel(false);
            }
            if (isStatus) {
                const data = {
                    'data': {
                        'publishedAt': status.publicAt
                    }
                };
                await productApi.update(status.id, data);
                setIsStatus(false);
            }
            const response = await productApi.getAll(props.params);
            setProducts(response.data.data);
            setTotalPage(response.data.meta.pagination.pageCount)
        };
        fetchData();
    }, [isDel, isStatus, del, status, props.params, props.pageNum]);
    return (
        <div className="col-md-10">
            <div className="card">
                <div className="card-header d-flex justify-content-between fs-1 fw-bold">
                    <div>Products</div>
                    <div ><Link className='btn btn-success' to={'/admin/product/create'}>Create</Link></div>
                </div>
                <div className="card-body p-3">
                    <div className=''>
                        <Filter handlePageSize={handlePageSize} filterKeySearch={filterKeySearch} handleStatus={handleStatus} />
                    </div>
                    <table className="table table-hover">
                        <thead className=''>
                            <tr className=''>
                                <th scope="col">#</th>
                                <th scope="col">image</th>
                                <th scope="col">Name</th>
                                <th scope="col">category</th>
                                <th scope="col">price</th>
                                <th scope="col">....</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map(e => {
                                    return (
                                        <tr key={e.id} className='p-3'>
                                            <th scope="row">{e.id}</th>
                                            <td><img width={'50px'} height={'50px'} src={`${AppUrl.ImageUrl}${e.attributes?.image?.data[0]?.attributes?.url}`} alt="" /></td>
                                            <td>{e.attributes.productName}</td>
                                            <td>{e.attributes.category.data?.attributes.categoryName}</td>
                                            <td>{e.attributes.price}</td>
                                            <td>
                                                <span className='btn   text-danger p-2' onClick={() => handleClickStatus(e.id, e.attributes.publishedAt)}>
                                                    {e.attributes.publishedAt ?
                                                        <i className="fa-solid fa-toggle-on"></i>
                                                        :
                                                        <i className="fa-solid fa-toggle-off"></i>
                                                    }
                                                </span>
                                                <Link
                                                    to={'' + e.id}
                                                    className='btn bg-info text-white'>
                                                    View</Link>
                                                <Link to={'edit/' + e.id} className='btn bg-warning '>Edit</Link>
                                                <span onClick={() => handleClickDelete(e.id)} className='btn bg-danger text-white'>Delete</span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <Pagination totalPage={totalPage} currentPage={props.pageNum} basePath="?page=" />
                </div>
            </div>

        </div >
    )
}

export default Content
