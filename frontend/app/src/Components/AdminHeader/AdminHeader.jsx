import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';
import logo from './logo.png';

const AdminHeader = () => {
  return (
    <div className='ad-header-main'>
      <div className='ad-header-logoCon'>
        <img className='ad-header-logo' src={logo} alt='LUMS MARKETPLACElogo' />
      </div>
      <nav className='ad-header-nav'>
        <div className='ah-link-con'>
          <Link className='ah-link' to='/ViewUserAdmin'>
            Users
          </Link>
        </div>
        <div className='ah-link-con'>
          <Link className='ah-link' to='/PostViewAdmin'>
            Posts
          </Link>
        </div>
        <div className='ah-link-con'>
          <Link className='ah-link' to='/viewp'>
            Profile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
