import React, { useState, useEffect } from 'react';
import UserView from '../../Components/UserView/UserView';
import AdminHeader from '../../Components/AdminHeader/AdminHeader';
import Footer from '../../Components/Footer/Footer';

const ViewUserAdmin = () => {
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
  }, []);

  useEffect(() => {
    // console.log(userArray);
  }, [userArray]);

  let i = 0;
  const allUsers = userArray.map((user) => {
    i++;
    return (
      <UserView key={user._id} {...user}>
        {i}
      </UserView>
    );
  });

  return (
    <div>
      <AdminHeader></AdminHeader>
      <h1 style={{ marginTop: '3.5vw', color: '#1c0040' }}>All Users</h1>
      {allUsers}
      <Footer></Footer>
    </div>
  );
};

export default ViewUserAdmin;
