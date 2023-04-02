import React, { useState } from "react";
import { Link } from "react-router-dom";
import l1 from './l1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';
import l5 from './l5.png';
import l7 from './l7.png';
import axios from 'axios';

// import Footer from "../Footer/Footer"
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import "./Header1.css";

const Header = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [search, setSearch] = useState("")
  const handleFilterClick = (filter) => {
    setSelectedFilters((prevFilters) => [...prevFilters, filter]);
    setShowFilterOptions(true);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };
  const handle=(e) => {
    const  value = e.target.value
    setSearch(value);

  }
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    axios.post('api/search/filterSearch', {params:{ selectedFilters, priceRange, search }})
    console.log("Selected filters:", selectedFilters);
    console.log("Price range:",  priceRange);
  };
  const handlC = ()=>{
    axios.post('api/search/simpleSearch', {params:{search}} )
  }
  return (
    <>
    <div className="header">
      {/* <h1 style={{fontFamily:"sans-serif", color:"white"}}> Thrift.Lums</h1> */}
      <img className = "lo" src={logo} alt="fuck"/>
      <div className="icon">
        <Link to ="/addPost">
        <img className="im" style={{width:"50%"}} src = {l5} alt="fuck of"/>
        </Link>
        <Link to ="/home">
        <img className="im" src = {l4} alt="fuck of"/>
        </Link>
        <Link to ="/hello">
        <img className="im" src = {l3} alt="fuck of"/>
        </Link>
        <Link to ="/hello">
        <img className="im" src = {l2} alt="fuck of"/>
        </Link>
        <Link to ="/viewp">
        <img className="im" src = {l1} alt="fuck of"/>
        </Link>
        <Link to ="/login">
        <img className="im" src = {l7} alt="fuck of"/>
        </Link>

      </div>
    </div>
    <nav className="navbar">
      <div className="search-bar">
      <form onSubmit={handleFilterSubmit}>
  <input
    type="text"
    placeholder="Search"
    className="search-input"
    onChange={handle}
  />
  <button type="submit" className="search-btn" onClick={handlC}>
    <FontAwesomeIcon icon={faSearch} />
  </button>
</form>

</div>
<div className="filter-bar">
<button className={`filter-btn ${filterActive && "active"}`} onClick={() => setFilterActive(!filterActive)}>

Filter
</button>
{filterActive && (
<div className="filter-options">
<div className="filter-section">
<h4>Category</h4>
<ul>
<li onClick={() => handleFilterClick("Books")}>Books</li>
<li onClick={() => handleFilterClick("Clothes")}>Clothes</li>
<li onClick={() => handleFilterClick("Electronics")}>
Electronics
</li>
<li onClick={() => handleFilterClick("Furniture")}>
Furniture
</li>
</ul>
<h4>Sort By</h4>
<ul>
<li onClick={() => handleFilterClick("Newiest")}>Newiest</li>
<li onClick={() => handleFilterClick("Oldest")}>Oldest</li>

</ul>
</div>
<div className="filter-section">
<h4>Price Range</h4>
<div className="price-range-inputs">
<input
               type="text"
               placeholder="Min"
               name="min"
               value={priceRange.min}
               onChange={handlePriceRangeChange}
             />
<input
               type="text"
               placeholder="Max"
               name="max"
               value={priceRange.max}
               onChange={handlePriceRangeChange}
             />
</div>
</div>
<div className="filter-section">
<h4>Selected Filters:</h4>
<ul>
{selectedFilters.map((filter) => (
<li key={filter}>{filter}</li>
))}
</ul>
</div>
</div>
)}
</div>
</nav>
{/* <Footer/> */}
</>
);
};

export default Header;