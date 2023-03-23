import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import img1 from './img1.png';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const space = ' ';
  const navigate = useNavigate();

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

  const login = () => {
    axios
      .post('api/goals/login', user)
      .then((res) => {
        // console.log(res.data, "thi")
        alert(res.data.message);
        props.setLoginUser(res.data.user);
        console.log(res.data.user, 'th');
        navigate(`/viewP`, { state: { user: res.data } });
      })
      .catch((error) => console.error('Login Error: ', error));
  };

  return (
    <div className='login' style={{ alignItems: 'start' }}>
      <img src={img1} alt='logo LUMS Marketplace' />

      <h1 className='lh1'>Login</h1>

      <div className='inp'>
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
          Don't have an account? {space}.
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
