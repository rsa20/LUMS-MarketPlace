import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import l1 from './l1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';
import l5 from './l5.png';
import l6 from './l6.png';
// import axios from 'axios';
import logo from './logo.png';
// import logo2 from './logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './Header1.css';
import { useNavigate } from 'react-router-dom';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [wish, setwish] = useState([]);
  const [vsearch, setVsearch] = useState([]);

  const navigate = useNavigate([]);
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  // console.log(userEmail, 'user');
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [search, setSearch] = useState('');
  const handleFilterClick = (filter) => {
    setSelectedFilter((prevFilters) => [...prevFilters, filter]);
    setShowFilterOptions(true);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };
  const handle = (e) => {
    const value = e.target.value;
    setSearch(value);
    console.log(search);
  };
  // const handleFilterSubmit = (e) => {
  //   e.preventDefault();

  //   axios.post('api/goals/login', { selectedFilter, priceRange, search });
  //   console.log('Selected filter:', selectedFilter);
  //   console.log('Price range:', priceRange);
  // };
  const handlC =  (selectedFilter, priceRange, search) => {
    console.log(selectedFilter, priceRange, search, "handle");
    // let myfilter;

    // await fetch('/api/search/filtersearch', {
    //   params: { selectedFilter, priceRange, search },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data, 'test');
    //     myfilter = data;
    //     console.log(myfilter);
    //     setVsearch(data);
    //   })
    //   .catch((error) => console.log(error));
    // console.log(vsearch, 'hmmm');

    // navigate('/vsea', { state: { myfilter } });
  };

  const handleFilterSubmit = (selectedFilter, priceRange, search) => {
    console.log(selectedFilter, priceRange, search, "hello");
    let myfilter;
    // await fetch('/api/search/filtersearch', {
    //   params: { selectedFilter, priceRange, search },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data, 'test');
    //     myfilter = data;
    //     console.log(myfilter);
    //     setVsearch(data);
    //   })
    //   .catch((error) => console.log(error));
    // console.log(vsearch, 'hmmm');
    // navigate('/vsea', { state: { myfilter } });
  };

  const viewWish = async (userID) => {
    console.log(userID, 'safsafd');
    // const response = await fetch(`/api/posts/product ${email}`);
    // const data = await response.json();
    // const { id, title, description, price,state } = data;
    // const productDetails = { title, description, id, price,state };
    // console.log(productDetails);
    //
    let mywish = [];
    await fetch(`/api/wishlist/getWishlist/${userID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'test');
        mywish = data;
        setwish(data);
      })
      .catch((error) => console.log(error));
    // let mywish = [];
    // await fetch(`/api/wishlist/getWishlist/${userID}`)
    //   .then((response) => {
    //     if (response.ok) {
    //       response.json();
    //       console.log(data, 'test here header');
    //       // setwish(data);
    //       // mywish = wish;
    //     }
    //     alert();
    //   })
    //   .catch((error) => console.log(error));
    navigate('/wish', { state: { mywish } });
  };
  return (
    <div className='header'>
      <div className='header-navbar'>
        <div className='header-logo-con'>
          <Link to='/home'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='header-logo-con2'>
          <Link to='/home'>
            <img className='logo' src={logo} alt='logo2' />
          </Link>
        </div>
        <div className='icon-container'>
          {userEmail === '24100244@lums.edu.pk' ? (
            <Link to='/ViewUserAdmin' style={{ marginRight: '0.9vw' }}>
              <FontAwesomeIcon
                icon={faFolder}
                style={{
                  color: '#fffffa',
                  fontSize: '1.7vw',
                }}
              />
            </Link>
          ) : (
            ''
          )}
          <Link to='/Addpost'>
            <img className='im' src={l5} alt='add post button' />
          </Link>
          <Link to='/home'>
            <img className='im' src={l4} alt='home button' />
          </Link>
          <Link to='/hello'>
            <img className='im' src={l3} alt='fuck of' />
          </Link>
          <Link>
            <img
              onClick={() => viewWish(loggedInUser._id)}
              className='im'
              src={l2}
              alt='fuck of'
            />
          </Link>
          <Link to='/viewp'>
            <img className='im' src={l1} alt='' />
          </Link>
          <Link to='/login'>
            <img className='im' src={l6} alt='Log out button' />
          </Link>
        </div>
      </div>

      <nav className='navbar'>
        <div className='search-bar'>
          <form onSubmit={handleFilterSubmit}>
            <input
              type='text'
              placeholder='Search'
              className='search-input'
              onChange={handle}
            />
            <button type='submit' className='search-btn' onClick={handlC}>
            {/* <button type='submit' className='search-btn'> */}
              <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
            </button>
          </form>
        </div>
        <div className='button-container'>
          <span
            className={`filter-btn ${filterActive && 'active'}`}
            onClick={() => setFilterActive(!filterActive)}
          >
            | Filter
          </span>

          {filterActive && (
            <div className='filter-options'>
              <div className='filter-section'>
                <h4>Category</h4>
                <ul>
                  <li onClick={() => handleFilterClick('Books')}>Books</li>
                  <li onClick={() => handleFilterClick('Clothes')}>Clothes</li>
                  <li onClick={() => handleFilterClick('Electronics')}>
                    Electronics
                  </li>
                  <li onClick={() => handleFilterClick('Furniture')}>
                    Furniture
                  </li>
                </ul>
                <h4>Sort By</h4>
                <ul>
                  <li onClick={() => handleFilterClick('Newiest')}>Newiest</li>
                  <li onClick={() => handleFilterClick('Oldest')}>Oldest</li>
                </ul>
              </div>
              <div className='filter-section'>
                <h4>Price Range</h4>

                <div className='price-range'>
                  <label>
                    Min Price:
                    <input
                      type='number'
                      name='min'
                      value={priceRange.min}
                      onChange={handlePriceRangeChange}
                    />
                  </label>
                  <label>
                    Max Price:
                    <input
                      type='number'
                      name='max'
                      value={priceRange.max}
                      onChange={handlePriceRangeChange}
                    />
                  </label>
                </div>
              </div>
              <div className='filter-section'>
                <h4>Selected Filters:</h4>
                <ul>
                  {selectedFilter.map((filter) => (
                    <li key={filter}>{filter}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
