import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SelectBox from '../../../components/Backend/SelectBox'
import { categoryApi } from '../../../Api/categoryApi'
import { productApi } from '../../../Api/productApi'
import Upload from '../../../components/Backend/Upload'
import { AppUrl } from '../../../Api/AppUrl'
import { validate } from '../../../components/Backend/Validation'
import { ToastContainer, toast } from 'react-toastify'

const UpdateProduct = () => {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState([])
  const [error, setError] = useState({})
  const [data, setData] = useState({
    "productName": "",
    "price": "",
    "category": "",
    "description": "",
    "detail": "",
    "image": [""],
    "account": "1"
  })
  const params = {
    populate: '*',
  }
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const responseProduct = await productApi.get(id, { populate: '*' })
      const product = responseProduct.data.data
      console.log(product);
      setData({
        ...data,
        "productName": product.attributes.productName,
        "price": product.attributes.price,
        "category": product.attributes.category.data?.id || '',
        "description": product.attributes.description,
        "detail": product.attributes.detail,
        "image": [product.attributes.image.data[0].id],
      })
      setImage(product.attributes.image.data[0].attributes.url)
      const response = await categoryApi.getAll(params);
      setCategory(response)
    }
    fetchData()
  }, [id])
  const handleChangeSelect = value => {
    setData({ ...data, "category": value })
    setError({ ...error, category: '' })
  }
  const hanldeUpdateData = (respones) => {
    setData({ ...data, "image": [respones.id] })
    setImage(respones.url)
    setError({ ...error, image: '' })
  }
  const handleSubmitCreate = (e) => {
    e.preventDefault();
    let error = validate(data)
    setError(error)
    console.log(error);
    const updateProduct = async (id,data) => {
      const senData = { "data": data }
      const response = await productApi.update(id,senData)
      if (response.status == 200) {
        toast.success(' Edit successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
    if (Object.keys(error).length === 0) {
      console.log(data);
      updateProduct(id,data)
    } else {

    }

  }
  return (
    <div className="col-md-10">
      
      <div className="card">
        <div className="card-header fs-1 fw-bold d-flex justify-content-between">
          <div> Edit Products</div>
          <Link to={'../product'}><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
        </div>
        <div className="card-body p-3">
          <form onSubmit={handleSubmitCreate} id='create' method='post'>
            <div className="row">
              <div className="col-8">
                <div>
                  <label htmlFor="" className='form-label my-3'>Name <span className='text-danger'>*</span> </label>
                  <input value={data.productName} onKeyDown={(e) => setError({ ...error, productName: '' })} onChange={(e) => setData({ ...data, "productName": e.target.value })} type="text" id='name' name='name' className='form-control py-3 mb-2' placeholder='Name...' />
                  <span className='text-danger py-2'>{error.productName ? error.productName : ''}</span>
                </div>
                <div>
                  <label htmlFor="" className='form-label my-3'>price</label>
                  <input value={data.price} onKeyDown={(e) => setError({ ...error, price: '' })} onChange={(e) => setData({ ...data, "price": e.target.value })} type="number" id='price' className='form-control py-3' placeholder='Name...' />
                  <span className='text-danger py-2'>{error.price ? error.price : ''}</span>
                </div>
                <div>
                  <label htmlFor="" className='form-label my-3'>category</label>
                  <SelectBox selected={data.category} handleChangeSelect={handleChangeSelect} idName='category' data={category.data?.data} />
                  <span className='text-danger py-2'>{error.category ? error.category : ''}</span>
                </div>
                <div>
                  <label htmlFor="" className='form-label my-3'>description</label>
                  <textarea value={data.description} onKeyDown={(e) => setError({ ...error, description: '' })} onChange={(e) => setData({ ...data, "description": e.target.value })} id='des' className='form-control py-3' placeholder='detail...' >{data.description}</textarea>
                  <span className='text-danger py-2'>{error.description ? error.description : ''}</span>
                </div>
                <div>
                  <label htmlFor="" className='form-label my-3'>detail</label>
                  <textarea onKeyDown={(e) => setError({ ...error, detail: '' })} onChange={(e) => setData({ ...data, "detail": e.target.value })} id='detail' className='form-control py-3' placeholder='detail...' value={data.detail} ></textarea>
                  <span className='text-danger py-2'>{error.detail ? error.detail : ''}</span>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="upload" className='d-block'>
                  <div style={{ height: '200px' }} className='border my-5 d-flex justify-content-center align-items-center'>
                    {image == '' ?
                      <span style={{ fontSize: '100px' }} >+</span> :
                      <img className='w-100 h-100' src={`${AppUrl.ImageUrl}${image}`} alt="" />
                    }
                  </div>
                </label>
                <Upload hanldeUpdateData={hanldeUpdateData} />
                <span className='text-danger py-2'>{error.image ? error.image : ''}</span>
              </div>
            </div>
            <button type='submit' className='btn btn-primary w-100 p-3 my-5 fs-3'>Update</button>
          </form>
        </div>
      </div>

    </div >
  )
}

export default UpdateProduct
