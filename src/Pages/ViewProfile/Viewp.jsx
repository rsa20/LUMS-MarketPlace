import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import img from "./img.jpg";
import "./Viewp.css";
import Header from "../../Components/header/Header1";
import Footer from '../../Components/Footer/Footer';
import ProfileHeader from "../../Components/Phead/Fh";
export const Viewp = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
    }
  }, [location.state]);
console.log(email)
  return (
    <>
    <Header/>
    <ProfileHeader/>

    <div className="profile">
      <div className="pro">
        <div className="pic">
          <img className="im" style={{ borderRadius: "10%" }} src={img} alt="user-pic" />
        </div>
        <div className="co">
          <p>Name</p>
          <h2>Talha Husnain</h2>
          <p>Email</p>
          <h2>talha@gmail.com</h2>
          <p>Account</p>
          <h2>Users</h2>
          {/* <span className="rev"> */}
            <span>
              <span style={{fontSize:"130%"}}>Post</span>
            </span>
            <span>
              <span style={{fontSize:"130%", marginLeft:"8%"}}>Review</span>
            </span>
            <div>
              <span>
                <span style={{fontSize:"130%", fontWeight:"bold"}}>60</span>
              </span>
              <span>
                <span style={{fontSize:"130%", marginLeft:"8%", fontWeight:"bold"}}>100</span>
              </span>
            </div>
          {/* </span> */}
        </div>
      </div>
    </div>
    <div className="foot">
    < Footer/>
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
