import React, { useEffect, useState } from 'react'
import { productApi } from '../../../Api/productApi';
import { AppUrl } from '../../../Api/AppUrl';
import { Link, useParams } from 'react-router-dom';

const Show = () => {
    const [product, setProduct] = useState({});

    let { id } = useParams();
    useEffect(() => {
        var params = {
            populate: '*',
        }
        const fetchData = async () => {
            const response = await productApi.get(id, params);
            setProduct(response.data.data);
        }
        fetchData()
    }, [id])
    return (
        <div className="col-md-10">
            <div className="card">
                <div className="card-header fs-1 fw-bold d-flex justify-content-between">
                   <div> Show Products</div>
                   <Link to={'/admin/product'}>Back</Link>
                </div>
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-4">
                            <div className='text-center'><img className='img-fluid' src={`${AppUrl.ImageUrl}${product.attributes?.image.data[0].attributes.url}`} alt="" /></div>
                        </div>
                        <table className="table table-hover col">
                            <tbody>
                                <tr>
                                    <th>id</th>
                                    <td>{product?.id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{product.attributes?.productName}</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>{product.attributes?.category?.data?.attributes?.categoryName}</td>
                                </tr>
                                <tr>
                                    <th>creatd at</th>
                                    <td>{product.attributes?.createdAt}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Show
