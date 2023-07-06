import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SelectBox from '../../../components/Backend/SelectBox'
import { categoryApi } from '../../../Api/categoryApi'
import Upload from '../../../components/Backend/Upload'
import { AppUrl } from '../../../Api/AppUrl'
import { validate } from '../../../components/Backend/Validation'
import { toast } from 'react-toastify'

const Create = () => {
    const [image, setImage] = useState('');
    const [category, setCategory] = useState([])
    const [error, setError] = useState({})
    const [data, setData] = useState({
        "categoryName": "",
        "description": "",
        "image": [""],
    })
    const hanldeUpdateData = (respones) => {
        setData({ ...data, "image": [respones.id] })
        setImage(respones.url)
        setError({ ...error, image: '' })
    }
    const handleSubmitCreate = (e) => {
        e.preventDefault();
        let error = validate(data)
        setError(error)
        const addCategory = async (data) => {
            const senData = { "data": data }
            const response = await categoryApi.add(senData)
            console.log(response);
            if (response.status == 200) {
                setData({
                    "categoryName": "",
                    "description": "",
                    "image": [""],
                })
                toast.success(' Create successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                document.getElementById('create').reset()
            }
        }
        if (Object.keys(error).length === 0) {
            addCategory(data)
        } else {

        }

    }
    return (
        <div className="col-md-10">
            <div className="card">
                <div className="card-header fs-1 fw-bold d-flex justify-content-between">
                    <div> Create categorys</div>
                    <Link to={'../category\\ '}><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
                </div>
                <div className="card-body p-3">
                    <form onSubmit={handleSubmitCreate} id='create' method='post'>
                        <div className="row">
                            <div className="col-8">
                                <div>
                                    <label htmlFor="" className='form-label my-3'>Name <span className='text-danger'>*</span> </label>
                                    <input onKeyDown={(e) => setError({ ...error, categoryName: '' })} onChange={(e) => setData({ ...data, "categoryName": e.target.value })} type="text" id='name' name='name' className='form-control py-3 mb-2' placeholder='Name...' />
                                    <span className='text-danger py-2'>{error.categoryName ? error.categoryName : ''}</span>
                                </div>

                                <div>
                                    <label htmlFor="" className='form-label my-3'>description</label>
                                    <textarea onKeyDown={(e) => setError({ ...error, description: '' })} onChange={(e) => setData({ ...data, "description": e.target.value })} id='des' className='form-control py-3' placeholder='detail...' ></textarea>
                                    <span className='text-danger py-2'>{error.description ? error.description : ''}</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="upload" className='d-block'>
                                    <div style={{ height: '200px', border: "1px dashed #000aa" }} className='my-5 d-flex justify-content-center align-items-center'>
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
                        <button type='submit' className='btn btn-primary w-100 p-3 my-5 fs-3'>Create</button>
                    </form>
                </div>
            </div>

        </div >
    )
}
export default Create

