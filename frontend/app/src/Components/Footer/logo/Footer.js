import React from 'react';
import './Footer.css';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { IoIosArrowUp } from 'react-icons/io';
import logo from './logo/logo.png';

const Footer = () => {
  return (
    <footer className="foot">
        {/* <h1>Hello</h1> */}
        <div className='logo'>
          <img className='fl' style={{width:"80%", marginTop:"5%"}} src={logo} alt="fuck"/>
        </div>
        <div className='con' style={{fontFamily:"popins", fontSize:"40%", color:"whitesmoke"}}><h1 style={{marginTop:"3%", fontSize:"28px"}} >Get in Touch <br/> With our Team </h1></div>
        <div className='so'style={{fontFamily:"popins", fontSize:"100%", color:"whitesmoke"}}>
            <p style={{fontFamily:"popins", fontSize:"100%", color:"whitesmoke"}}>Contributors</p>       
            <div className='part'>
              <div className='c1' style={{width:"30%"}} >Abdullah Ehsan  <br/>  Abdul Moez </div>
              <div className='c2' style={{width:"30%"}} > Husnain Mobeen <br/> Maha Noor Asad</div>
              <div className='c3'style={{width:"30%"}} >Rimsha sarfaraz <br/>Talha Husnain </div>

              
              </div>   
          </div>


      {/* <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer__item">
              <h4 className="footer__item-title">Company Name</h4>
              <p className="footer__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer__item">
              <h4 className="footer__item-title">Quick Links</h4>
              <ul className="footer__item-list">
                <li><a href="/hello">Home</a></li>
                <li><a href="/helllo">Shop</a></li>
                <li><a href="/hello">About Us</a></li>
                <li><a href="/hello">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer__item">
              <h4 className="footer__item-title">Follow Us</h4>
              <ul className="footer__item-list footer__item-list--inline">
                <li><a href="/hello"><FaFacebook /></a></li>
                <li><a href="/hello"><FaInstagram /></a></li>
                <li><a href="/hello"><FaTwitter /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer__item">
              <h4 className="footer__item-title">Newsletter</h4>
              <p className="footer__item-text">
                Subscribe to our newsletter and get 10% off your first purchase.
              </p>
              <form className="footer__item-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer__bottom">
              <div className="footer__bottom-left">
                <p>&copy; 2023 Company Name. All Rights Reserved.</p>
              </div>
              <div className="footer__bottom-right">
                <a href="/hello" className="footer__back-to-top"><IoIosArrowUp /></a>
                <a href="/hello" className="footer__home-link">Home</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
