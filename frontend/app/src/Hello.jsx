import React, { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header1';
// import AddReview from './Components/AddReview/AddReview';
import Car2 from './Components/Car2/Car2';
import Carousel from './Components/Carousel/Carousel';
import i1 from './Components/Carousel/he1.jpg';
import i2 from './Components/Carousel/he2.jpg';
import i3 from './Components/Carousel/he3.jpg';
// import Review from './Components/Review/Review';
import UserView from './Components/UserView/UserView';

const images = [
  'https://picsum.photos/id/1018/1000/600',
  'https://picsum.photos/id/1021/1000/600',
  'https://picsum.photos/id/1025/1000/600',
  i1,
  i2,
  i3,
];

export const Hello = () => {
  // const user = { flag: true, profile_picture: i1 };
  // const [userArray, setUserArray] = useState([]);
  // // 24100244 ki id
  // // fetch(`api/admin/allUsers${'64203f221e53cea886b6eccf'}`).then((res) => {
  // //   if (!res.ok) {
  // //     console.error(res.status);
  // //   } else {
  // //     console.log(res);
  // //     setUserArray(res.data);
  // //   }
  // // });
  // fetch(`/api/admin/allUsers${'64203f221e53cea886b6eccf'}`)
  //   .then((res) => {
  //     if (!res.ok) {
  //       console.error(res.status);
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data.users);
  //   })
  //   .catch((error) => {
  //     console.error(error.message);
  //   });
  return (
    <div>
      {/* <Review
        reviwerName='Abdul'
        reviewText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, aliquid nesciunt a '
        reviewScore={2}
        reviewerImg={false}
      /> */}
      {/* <Header></Header>
      <div className='car2con'>
        <Car2 images={images} />
      </div>
      <Footer></Footer> */}
      <div
        className='car2-con'
        style={{ margin: '0 auto ', display: 'flex', alignContent: 'center' }}
      >
        <Car2 images={images} />
      </div>
    </div>
  );
};
export default Hello;
