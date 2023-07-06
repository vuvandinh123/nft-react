import Cookies from 'js-cookie';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import {setUser} from '../../redux/userSlice'
const AccountHeader = () => {
    const dispatch = useDispatch();
    if (Cookies.get('account')) {
      const handleUserClick = () => {
        dispatch(setUser(''))
        Cookies.remove('account')
      }
      return (
        <>
          <div><img width={'30px'} height={'30px'} src="https://tse2.mm.bing.net/th?id=OIP.B6d3D3SBBiuAc0BF0b9RVwHaHa&pid=Api&P=0&h=180" alt="" />
            <div className='drop-user position-absolute '>
              <ul>
                <li onClick={handleUserClick}><span >đăng xuất</span> </li>
              </ul>
            </div>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div><i className="fa-solid fa-user" />
            <div className='drop-user position-absolute '>
              <ul>
                <li><Link to={'/login'}>đăng nhập</Link> </li>
                <li><Link to={'/singup'}>đăng ký</Link> </li>
              </ul>
            </div>
          </div>
        </>
      )
    }
}

export default AccountHeader
