import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import img1 from './img1.png';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const space = ' ';
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    profile_link: "",
    password: '',
    reEnterPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!user.name || user.name.trim().length < 4) {
      errors.name = 'Name should be at least 4 characters long';
    }

    if (!user.email || !user.email.endsWith('@lums.edu.pk')) {
      errors.email = 'Invalid email, please enter a valid LUMS email';
    }

    if (
      !user.password ||
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(user.password) ||
      user.password.trim().length < 8
    ) {
      // errors.password = [
      //   'Password should be at least 8 characters long with',
      //   'at least one uppercase letter, one lowercase letter,',
      //   'one number and one special character.',
      // ];
      errors.password =
        'Password should be at least 8 characters long with at least one uppercase letter, one lowercase letter, one number and one special character.';
    }

    if (user.password !== user.reEnterPassword) {
      errors.reEnterPassword = 'Passwords do not match';
    }

    return errors;
  };

  const register = () => {
    const errors = validate();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    axios
      .post('/api/goals/register', user)
      .then((res) => {
        alert(res.data.message);
        navigate('/login'); //redirect this to email verification page
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className='register'>
      {console.log('User', user)}

      <img src={img1} alt='logo LUMS Marketplace' />
      <h1 className='lh1'>Create Account</h1>

      <div className='register-form-inp'>
        <h1 className='register-h'>Full Name </h1>
        <input
          type='text'
          name='name'
          value={user.name}
          placeholder='Enter your Full Name'
          required='true'
          pattern='^[A-Za-z0-9]{4,}$'
          onChange={handleChange}
        />
        {errors.name && <div className='error'>{errors.name}</div>}
      </div>

      <div className='register-form-inp'>
        <h1 className='register-h'>Email </h1>
        <input
          type='email'
          name='email'
          value={user.email}
          placeholder='Enter your Email'
          onChange={handleChange}
        />
        {errors.email && <div className='error'>{errors.email}</div>}
      </div>

      <div className='register-form-inp'>
        <h1 className='register-h'>Facebook Messenger Profile Link</h1>
        <input
          type='text'
          name='profile_link'
          value={user.profile_link}
          placeholder='Enter profile link'
          onChange={handleChange}
        />

      </div>

      <div className='register-form-inp'>
        <h1 className='register-h'>Password </h1>
        <input
          type='password'
          name='password'
          value={user.password}
          placeholder='Enter Password'
          onChange={handleChange}
        />
        {errors.password && <div className='error'>{errors.password}</div>}
      </div>

      <div className='register-form-inp'>
        <h1 className='register-h'>Confirm Password </h1>
        <input
          type='password'
          name='reEnterPassword'
          value={user.reEnterPassword}
          placeholder='Re-enter Password'
          onChange={handleChange}
        />
        {errors.reEnterPassword && (
          <div className='error'>{errors.reEnterPassword}</div>
        )}
      </div>

      <button className='register-button' onClick={register}>
        Register
      </button>

      <span className='loginlinebtn'>
        <h4 className='loginline' style={{ fontWeight: '500' }}>
          Don't have an account? {space}.
        </h4>
        <h4 className='loginbtn' onClick={() => navigate('/login')}>
          Log in
        </h4>
      </span>
    </div>
  );
};
export default Register;
