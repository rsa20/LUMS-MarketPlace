import React from 'react';

const UserView = ({
  _id,
  email,
  name,
  user_name,
  profile_picture,
  date_created,
  flag,
}) => {
  const defaultData = {
    _id: 'default',
    email: 'default',
    name: 'default',
    user_name: 'default',
    profile_picture: 'default',
    date_created: 'default',
    flag: false,
  };
  return (
    <div className='userView-con'>
      <h1>User</h1>
    </div>
  );
};

export default UserView;
