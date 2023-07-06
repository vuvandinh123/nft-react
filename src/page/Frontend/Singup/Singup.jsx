import React, { useEffect, useState } from 'react'
import { accountApi } from '../../../Api/accountApi'
import { Link, useNavigate } from 'react-router-dom'

const Singup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cfPassword, setCfPassword] = useState('')
    const [messeger,setMesseger] = useState({})
    const navigate = useNavigate();

    const handleUserNameOnchange = value =>{
        setUsername(value)
    }
    const handleEmailOnchange = value =>{
        setEmail(value)
    }
    const handlePasswordOnchange = value =>{
        setPassword(value)
    }
    const handleCfPasswordOnchange = value =>{
        setCfPassword(value)
    }
    const handleSingupClick = (e) => {
        e.preventDefault();
        // console.log(e);
        if (username && email && password && cfPassword && (cfPassword == password)) {
            
            const data = {
                "data": {
                    "Username": username,
                    "Email": email,
                    "Password": password
                }

            }
            const fetchData = async () => {
                const response = await accountApi.add(data);
            }
            fetchData()
            alert('đăng ký thành công');
            navigate('/login');

        }
        else{
            alert('đăng ký thất bại');
        }
    }
    console.log(messeger);
    return (
        <>
            <div className="container">
                <h1 className="text-center text-danger fs-1">Register</h1>
                <form action="" className='my-5' method="post">
                    <div className='my-3 w-50 m-auto border p-5'>
                        <div className='my-4' >
                            <label htmlFor="" className='form-label pb-3'>UserName <span className='text-danger'>*</span></label>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' className='form-control p-3 fs-4' />
                            <span className='text-danger'>{messeger.username}</span>
                        
                        </div>
                        <div className='my-4' >
                            <label htmlFor="" className='form-label pb-3'>Email <span className='text-danger'>*</span></label>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' className='form-control p-3 fs-4' />
                            <span className='text-danger'>{messeger.email}</span>
                        </div>
                        <div className='my-4' >
                            <label htmlFor="" className='form-label pb-3'>Password <span className='text-danger'>*</span></label>
                             <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='form-control p-3 fs-4' />
                            <span className='text-danger'>{messeger.password}</span> 
                        </div>
                        <div className='my-4' >
                            <label htmlFor="" className='form-label pb-3'>Confirm password <span className='text-danger'>*</span></label>
                            <input onChange={(e) => setCfPassword(e.target.value)} type="password" placeholder='Confirm password' className='form-control p-3 fs-4' />
                            {/* <Input type={'password'} placeholder={'username'} onChange={handleCfPasswordOnchange}/> */}
                        </div>
                        <div className='my-4 d-flex justify-content-center'>
                            <button onClick={handleSingupClick} type='submit' className='btn btn-danger p-3 fs-3 px-5'>Đăng ký</button>
                        </div>
                <div className='d-flex justify-content-center'> <Link to={'/login'}>Login</Link> </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Singup
