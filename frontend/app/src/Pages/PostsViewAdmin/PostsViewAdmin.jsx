import React, { useState, useEffect } from 'react';
import PostAdmin from '../../Components/PostAdmin/PostAdmin';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import Footer from '../../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import axios from 'axios';

const PostsViewAdmin = () => {
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  const [check, setCheck] = useState(false);
  const [reRend, setReRend] = useState(false);

  const [adminId, setAdminId] = useState('');
  useEffect(() => {
    axios
      .get('api/admin/getAdmin')
      .then((response) => {
        if (response.status === 200) {
          // console.log('Admin', response.data);
          setAdminId(response.data);
        }
      })
      .catch((err) => console.error(err));
  }, [reRend]);

  useEffect(() => {
    setCheck(adminId === loggedInUser._id);
  }, [adminId, loggedInUser._id]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/posts/allProductsWithUserName')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "test")
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [reRend, check]);
  console.log(products[0]);
  const handleDelete = () => {
    setReRend(!reRend);
    // console.log('hello here i am to reload');
  };

  let i = 0;
  const allProducts = products.map((p) => {
    i++;
    return (
      <>
        {check ? (
          <PostAdmin key={p._id} {...p} onDelete={handleDelete}>
            {i}
          </PostAdmin>
        ) : (
          <h1>Logged in user is not admin</h1>
        )}
      </>
    );
  });

  return (
    <div>
      <AdminHeader></AdminHeader>
      <h1 style={{ marginTop: '3.5vw', color: '#1c0040' }}>All Posts</h1>
      {allProducts}
      <Footer></Footer>
    </div>
  );
};

export default PostsViewAdmin;
