import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import f1 from './f1.png';
import f2 from './f2.png';
import f3 from './f3.png';
import f4 from './f4.png';
import f5 from './f5.png';




import "./Header.css";

const Header = () => {
  return (
    <>
    <div className="header">
      <h1 style={{fontFamily:"sans-serif", color:"white"}}> Thrift.Lums</h1>
      <div className="icon">
        <Link to ="/hello">
        <img className="im" src = {f5} alt="fuck of"/>
        </Link>
        <Link to ="/hello">
        <img className="im" src = {f4} alt="fuck of"/>
        </Link>
        <Link to ="/hello">
        <img className="im" src = {f3} alt="fuck of"/>
        </Link>
        <Link to ="/hello">
        <img className="im" src = {f2} alt="fuck of"/>
        </Link>
        <Link to ="/hello">
        <img className="im" src = {f1} alt="fuck of"/>
        </Link>

      </div>
    

     {/* <FontAwesomeIcon icon={faEnvelope} />
     <Link to="#">
          <i className="fas fa-plus"></i>
        </Link> */}


      {/* <Link to="#">
        <img
          className="header__logo"
          src="/images/logo.png"
          alt="website logo"
        />
      </Link>
      <div className="header__icons">
        <Link to="#">
          <i className="fas fa-plus"></i>
        </Link>
        <Link to="#">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="#">
          <i className="fas fa-heart"></i>
        </Link>
        <Link to="#">
          <i className="fas fa-comment"></i>
        </Link>
        <Link to="#">
          <i className="fas fa-user"></i>
        </Link>
      </div> */}
    </div>
    <nav className="navbar">
      <div className="search-container">
        <input style={{fontFamily:"popins", color:"green"}} type="text" placeholder="Search product" className="search-box" />
      </div>
      <div className="filter-text">
        <span>|            Filter</span>
      </div>
      <div className="button-container">
      <Link to="/hello" className="button" >
          Men
        </Link>
        <Link to="/hello" className="button" >
          Women
        </Link>
        <Link to="/hello" className="button" >
          Child
        </Link>
        <Link to="/hello" className="button" >
          Blog
        </Link>
        <Link to="/hello" className="button" >
          Shoes
        </Link>
      </div>
    </nav>
  </>
  );
};

export default Header;
