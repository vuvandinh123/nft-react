import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SelectBox from '../../../components/Backend/SelectBox'
import { categoryApi } from '../../../Api/categoryApi'
import { productApi } from '../../../Api/productApi'
import Upload from '../../../components/Backend/Upload'
import { AppUrl } from '../../../Api/AppUrl'
import { validate } from '../../../components/Backend/Validation'
import { ToastContainer, toast } from 'react-toastify'

const UpdateCategory = () => {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState([])
  const [error, setError] = useState({})
  const [data, setData] = useState({
    "productName": "",
    "description": "",
    "image": [""],
  })

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const responseCategory = await categoryApi.get(id, { populate: '*' })
      const category = responseCategory.data.data
      console.log(category);
      setData({
        ...data,
        "categoryName": category.attributes.categoryName,
        "description": category.attributes.description,
        "image": [category.attributes.image.data[0].id],
      })
      setImage(category.attributes.image.data[0].attributes.url)
    }
    fetchData()
  }, [id])

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
      updateProduct(id,data)
    } else {

    }

  }
  return (
    <div className="col-md-10">
      
      {/* <div className="card">
        <div className="card-header fs-1 fw-bold d-flex justify-content-between">
          <div> Edit category</div>
          <Link to={'../category'}><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
        </div>
        <div className="card-body p-3">
          <form onSubmit={handleSubmitCreate} id='create' method='post'>
            <div className="row">
              <div className="col-8">
                <div>
                  <label htmlFor="" className='form-label my-3'>Name <span className='text-danger'>*</span> </label>
                  <input value={data.categoryName} onKeyDown={(e) => setError({ ...error, categoryName: '' })} onChange={(e) => setData({ ...data, "categoryName": e.target.value })} type="text" id='name' name='name' className='form-control py-3 mb-2' placeholder='Name...' />
                  <span className='text-danger py-2'>{error.categoryName ? error.categoryName : ''}</span>
                </div>
                <div>
                  <label htmlFor="" className='form-label my-3'>price</label>
                  <input value={data.price} onKeyDown={(e) => setError({ ...error, price: '' })} onChange={(e) => setData({ ...data, "price": e.target.value })} type="number" id='price' className='form-control py-3' placeholder='Name...' />
                  <span className='text-danger py-2'>{error.price ? error.price : ''}</span>
                </div>
                
                <div>
                  <label htmlFor="" className='form-label my-3'>description</label>
                  <textarea value={data.description} onKeyDown={(e) => setError({ ...error, description: '' })} onChange={(e) => setData({ ...data, "description": e.target.value })} id='des' className='form-control py-3' placeholder='detail...' >{data.description}</textarea>
                  <span className='text-danger py-2'>{error.description ? error.description : ''}</span>
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
      </div> */}

    </div >
  )
}

export default UpdateCategory
