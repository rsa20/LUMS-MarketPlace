import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import img1 from './img1.png';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserEmail, setUserObj } from '../Redux/Store.jsx';

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [logId, setLogId] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    axios
      .post('api/goals/login', user)
      .then((res) => {
        // console.log(res.data, "thi")
        // alert(res.data.message);
        console.log(res.data, 'th');
        dispatch(setUserObj(res.data));
        // props.setUserObj
        dispatch(setUserEmail(user.email));
        // setLogId(res.data.user._id);
        props.setLoginUser(res.data.user);

        // seeing if logged in user is admin
        axios
          .get('api/admin/getAdmin')
          .then((response) => {
            // res.data is admin id here
            // console.log('here', res.data.id);
            if (response.data === res.data._id) {
              console.log('Admin', response.data);
              navigate(`/ViewUserAdmin`);
            } else {
              navigate(`/viewP`);
            }
          })
          .catch((err) => {
            console.error(err);
            navigate(`/viewP`);
          });

        // if (response.data === res.data._id) {
        //   console.log('Admin', response.data);
        //   navigate(`/ViewUserAdmin`);
        // } else {
        //   navigate(`/viewP`);
        // }

        // navigate(`/viewP`, { state: { user: res.data } });
      })
      .catch((error) => {
        console.error('Login Error: ', error.response.data.message);
        alert(error.response.data.message);
      });
  };

  return (
    <div className='login' style={{ alignItems: 'start' }}>
      <img src={img1} alt='logo LUMS Marketplace' />

      {/* <h1 className='lh1'>Login</h1> */}

      <div className='inp inp_top'>
        <h1 className='h'>
          {/* Enter your Email{' '} */}
          Email{' '}
        </h1>

        <input
          type='text'
          name='email'
          value={user.email}
          onChange={handleChange}
          placeholder='Enter your Email'
        ></input>
      </div>

      <div className='inp'>
        <h1 className='h'>
          {/* Enter Password{' '} */}
          Password{' '}
        </h1>

        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          placeholder='Enter your Password'
        ></input>
      </div>

      <button className='button' onClick={login}>
        Log in
      </button>
      <span className='signuplinebtn'>
        <h4 className='signupline' style={{ fontWeight: '500' }}>
          Don't have an account?
        </h4>
        <h4 className='signupbtn' onClick={() => navigate('/register')}>
          Sign up
        </h4>
      </span>
      {/* <h3 className='or'>or</h3>
      <button className='button' onClick={() => navigate('/register')}>
        Register
      </button> */}
    </div>
  );
};

export default Login;
