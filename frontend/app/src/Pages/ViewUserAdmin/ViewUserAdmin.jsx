import React, { useState, useEffect } from 'react';
import UserView from '../../Components/UserView/UserView';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import Footer from '../../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ViewUserAdmin = () => {
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  const [check, setCheck] = useState(false);
  const [reRend, setReRend] = useState(false);

  const [adminId, setAdminId] = useState('');
  useEffect(() => {
    axios
      .get('api/admin/getAdmin')
      .then((response) => {
        if (response.status === 200) {
          console.log('Admin', response.data);
          setAdminId(response.data);
        }
      })
      .catch((err) => console.error(err));
  }, [reRend]);

  useEffect(() => {
    setCheck(adminId === loggedInUser._id);
  }, [adminId, loggedInUser._id]);

  const [userArray, setUserArray] = useState([]);
  useEffect(() => {
    fetch(`/api/admin/allUsers${'64203f221e53cea886b6eccf'}`)
      .then((res) => {
        if (!res.ok) {
          console.error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setUserArray(data.users);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [reRend, check]);

  useEffect(() => {
    // console.log(userArray);
  }, [userArray]);

  const handleDelete = () => {
    setReRend(!reRend);
    // console.log('hello here i am to reload');
  };

  let i = 0;
  const allUsers = userArray.map((user) => {
    i++;
    return (
      <UserView key={user._id} {...user} onDelete={handleDelete}>
        {i}
      </UserView>
    );
  });

  return (
    <>
      {check ? (
        <div>
          <AdminHeader></AdminHeader>
          <h1 style={{ marginTop: '3.5vw', color: '#1c0040' }}>All Users</h1>
          {allUsers}
          <Footer></Footer>
        </div>
      ) : (
        <h1>Logged in user is not admin</h1>
      )}
    </>
  );
};

export default ViewUserAdmin;
