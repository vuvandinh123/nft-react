import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/userSlice';
import { accountApi } from '../../../Api/accountApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  window.scrollTo(0,0)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error,setError] = useState({})
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Vui lòng nhập địa chỉ email hợp lệ').required('Vui lòng nhập địa chỉ email'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  const handleBtnSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await accountApi.getAll();
      const account = response.data.data;

      const matchedAccount = account.find((e) => e.attributes.Email === values.email);
      if (matchedAccount) {
        if (values.password === matchedAccount.attributes.Password) {
          const accountData = [values.email];
          Cookies.set('account', JSON.stringify(accountData), { expires: 1800 });
          dispatch(setUser(values.email));
          navigate('/');
        } else {
          alert('Mật khẩu không chính xác');
        }
      } else {
        alert('Tài khoản không chính xác')
        
      }
    } catch (error) {
      console.log('Lỗi khi gọi API', error);
    }

    setSubmitting(false);
  };
  console.log(error);
  return (
    <div className="container login">
      <h2 className='title'>LOGIN</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleBtnSubmit}
      >
        {({ isSubmitting }) => (
          <Form id='login'>
            <div className='username'>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" placeholder='Username' />
              <ErrorMessage name="email" component="span" className='py-3' style={{ color: 'red' }} />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder='Password' />
              <ErrorMessage name="password" component="span" className='my-3' style={{ color: 'red' }} />
            </div>
            <div className='submit'>
              <button id='btnSubmit' type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Đang đăng nhập...' : 'LOGIN'}
              </button>
            </div>
            <div className='d-flex justify-content-center py-5'>
              <Link to='/singup'>Register</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
