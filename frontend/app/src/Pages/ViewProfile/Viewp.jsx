import React, { useEffect, useState } from 'react';
import img from './img.jpg';
import './Viewp.css';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';

import ProfileHeader from '../../Components/Phead/Fh';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const Viewp = () => {
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  const [user, setUser] = useState('');
  const [accStatus, setAccStatus] = useState('User');
  const [info, setInfo] = useState({
    posts: 0,
    reviews: 0,
  });
  console.log(userEmail, 'userEmail');
  console.log(loggedInUser, 'logged in user2');

  // const location = useLocation();
  // console.log(location.state.user);

  useEffect(() => {
    const getInfoRP = async (userId) => {
      try {
        const response = await fetch(`api/goals/infoRP/${userId}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user info');
      }
    };
    getInfoRP(loggedInUser._id)
      .then((data) => {
        setInfo(data);
        // console.log(data); // { posts: 5, reviews: [{...}, {...}, ...] }
      })
      .catch((error) => {
        console.error(error); // Failed to fetch user info
      });
    // if (location.state) {
    //   setUser(location.state.user);
    // }

    axios
      .get('api/admin/getAdmin')
      .then((response) => {
        // res.data is admin id here
        if (response.data === loggedInUser._id) {
          console.log('Admin', response.data);
          setAccStatus('Admin');
        }
      })
      .catch((err) => {
        console.error('admin call catch: ', err);
      });

    setUser(loggedInUser);
  }, [loggedInUser]);

  // console.log(user, 'hello this is user');
  // console.log(info, 'info here');

  return (
    <>
      <Header />
      <ProfileHeader />

      <div className='profile'>
        <div className='pro'>
          <div className='pic'>
            <img
              className='im'
              style={{ borderRadius: '10%' }}
              src={img}
              alt='user-pic'
            />
          </div>
          <div className='co'>
            <p>Name</p>
            <h2>{user.name}</h2>
            <p>Email</p>
            <h2>{user.email}</h2>
            <p>Account</p>
            <h2>{accStatus}</h2>
            {/* <span className="rev"> */}
            <span>
              <span style={{ fontSize: '130%' }}>Posts</span>
            </span>
            <span>
              <span style={{ fontSize: '130%', marginLeft: '8%' }}>
                Reviews
              </span>
            </span>
            <div>
              <span>
                <span style={{ fontSize: '130%', fontWeight: 'bold' }}>
                  {info.posts}
                </span>
              </span>
              <span>
                <span
                  style={{
                    fontSize: '130%',
                    marginLeft: '8%',
                    fontWeight: 'bold',
                  }}
                >
                  {info.reviews}
                </span>
              </span>
            </div>
            {/* </span> */}
          </div>
        </div>
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </>
  );
};

// import axios from 'axios';

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import "./Viewp.css";
// import Header from "../../Components/header/Header1";
// import Footer from '../../Components/Footer/Footer';
// import ProfileHeader from "../../Components/Phead/Fh";

// export const Viewp = () => {

//     const location = useLocation();
//     const [emai, setEmail] = useState("");
//     const[user, setUser] = useState("");
//     useEffect(() => {
//       if (location.state) {
//         setEmail(location.state.email);
//       }
//     }, [location.state]);
//     console.log(emai);

//   useEffect(() => {
//     axios.get('https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewprofilepic.com%2F&psig=AOvVaw2BnfhJGGyBhxRHKKOkgZZi&ust=1679199928018000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCb4qvR5P0CFQAAAAAdAAAAABAE', emai)
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [emai]);

//   if (!user) {
//     // Render a loading indicator if the user object is not available yet
//     return (<div>
//           <Header/>
//     <p>Loading...</p>
//     <Footer/>
//     </div>);
//   }

//   const { name, email, account, pic } = user;

//   return (
//     <>
//     <Header/>
//     <ProfileHeader/>
//     <div className='profile'>
//         <div className='pro'>
//             <div className='pic'><img style={{borderRadius:"10%"}} src={pic} alt={name}/></div>
//             <div className='co'>
//               <p>Name</p>
//               <h1>{name}</h1>
//               <p>Email</p>
//               <h1>{email}</h1>
//               <p>Account</p>
//               <h1>{account}</h1>
//             </div>
//         </div>
//     </div>
//     <Footer/>
//     </>
//   )
// }
