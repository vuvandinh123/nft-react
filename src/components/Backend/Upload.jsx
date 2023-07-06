import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Upload = (props) => {
  const  [file, setFile] = useState([])
  const handleChange = (e)=>{
    setFile(e.target.files[0])
    // console.log(e.target.files);
  }
  // console.log(file);

  const handleUpload = async (e)=>{
    var data = new FormData();
    data.append('files', file)
    const response = await axios({
      method:'post',
      url:"http://localhost:1337/api/upload",
      data
    })
    const hanldeUpdateData = (response)=>{
      props.hanldeUpdateData(response)
    }
    if(response.status==200)
    {
      hanldeUpdateData({id:response.data[0].id,url:response.data[0].url})
    }
  }
  return (
    <div className='d-flex'>
      <input type="file" id='upload' onChange={handleChange} className='form-control' />
      <span onClick={handleUpload} className='btn btn-danger'>Upload</span>
    </div>
  )
}

export default Upload
