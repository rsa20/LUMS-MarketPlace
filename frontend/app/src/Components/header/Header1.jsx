import React from 'react';
import { Link } from 'react-router-dom';
import l1 from './l1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';
import l5 from './l5.png';
import l7 from './l7.png';
import logo from './logo.png';

import './Header1.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-navbar'>
        <div className='header-logo-con'>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='icon-container'>
          <Link to='/hello'>
            <img className='im' src={l5} alt='fuck of' />
          </Link>
          <Link to='/hello'>
            <img className='im' src={l4} alt='fuck of' />
          </Link>
          <Link to='/hello'>
            <img className='im' src={l3} alt='fuck of' />
          </Link>
          <Link to='/hello'>
            <img className='im' src={l2} alt='fuck of' />
          </Link>
          <Link to='/hello'>
            <img className='im' src={l1} alt='fuck of' />
          </Link>
          <Link to='/Login'>
            <img className='im' src={l7} alt='fuck of' />
          </Link>
        </div>
      </div>

      <div className='header-search-bar'>
        <div className='search-box-con'>
          <input
            type='text'
            placeholder='Search product'
            className='search-box'
          />
        </div>

        <p className='filter-btn'>| Filter</p>
      </div>
    </div>
  );
};

export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import l1 from './l1.png';
// import l2 from './l2.png';
// import l3 from './l3.png';
// import l4 from './l4.png';
// import l5 from './l5.png';
// import l7 from './l7.png';
// // import Footer from "../Footer/Footer"
// import logo from './logo.png';

// import './Header1.css';

// const Header = () => {
//   return (
//     <>
//       <div className='header'>
//         {/* <h1 style={{fontFamily:"sans-serif", color:"white"}}> Thrift.Lums</h1> */}
//         <img className='lo' src={logo} alt='fuck' />
//         <div className='icon'>
//           <Link to='/hello'>
//             <img
//               className='im'
//               style={{ width: '50%' }}
//               src={l5}
//               alt='fuck of'
//             />
//           </Link>
//           <Link to='/hello'>
//             <img className='im' src={l4} alt='fuck of' />
//           </Link>
//           <Link to='/hello'>
//             <img className='im' src={l3} alt='fuck of' />
//           </Link>
//           <Link to='/hello'>
//             <img className='im' src={l2} alt='fuck of' />
//           </Link>
//           <Link to='/hello'>
//             <img className='im' src={l1} alt='fuck of' />
//           </Link>
//           <Link to='/Login'>
//             <img className='im' src={l7} alt='fuck of' />
//           </Link>
//         </div>

//         {/* <FontAwesomeIcon icon={faEnvelope} />
//      <Link to="#">
//           <i className="fas fa-plus"></i>
//         </Link> */}

//         {/* <Link to="#">
//         <img
//           className="header__logo"
//           src="/images/logo.png"
//           alt="website logo"
//         />
//       </Link>
//       <div className="header__icons">
//         <Link to="#">
//           <i className="fas fa-plus"></i>
//         </Link>
//         <Link to="#">
//           <i className="fas fa-home"></i>
//         </Link>
//         <Link to="#">
//           <i className="fas fa-heart"></i>
//         </Link>
//         <Link to="#">
//           <i className="fas fa-comment"></i>
//         </Link>
//         <Link to="#">
//           <i className="fas fa-user"></i>
//         </Link>
//       </div> */}
//       </div>
//       <nav className='navbar'>
//         <div className='search-container'>
//           <input
//             style={{ fontFamily: 'popins', color: 'green' }}
//             type='text'
//             placeholder='Search product'
//             className='search-box'
//           />
//         </div>
//         {/* <div className="filter-text">
//         <span>|            Filter</span>
//       </div> */}
//         <div className='button-container'>
//           <span
//             style={{
//               fontWeight: 'bold',
//               fontFamily: 'sans-serif',
//               fontSize: '180%',
//             }}
//           >
//             |Filter
//           </span>
//         </div>
//       </nav>
//       {/* <Footer/> */}
//     </>
//   );
// };

// export default Header;
