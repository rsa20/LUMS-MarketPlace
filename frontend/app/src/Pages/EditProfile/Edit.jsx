import React, { useState } from 'react';
import './Edit.css';
import axios from 'axios';
import img from './profile_place.jpg';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import ProfileHeader from '../../Components/Phead/Fh';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserObj, setUserEmail } from '../Redux/Store.jsx';
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

const Edit = () => {
  // const navigate = useNavigate();
  const [p_img, setp] = useState('');
  // const userEmail = useSelector((state) => state.userEmail.userEmail);
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(userEmail, 'sjkdfsjkfn');
  // console.log(loggedInUser.email, 'sjkdfsjkfn');

  const [user, setUser] = useState({
    id: loggedInUser._id,
    name: loggedInUser.name,
    email: loggedInUser.email,
    profile_link: loggedInUser.profile_link,
    password: '',
    reEnterPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(img);
  const [imagePreview, setImagePreview] = useState(
    loggedInUser.profile_picture === null ? img : loggedInUser.profile_picture
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const cancle = () => {
    setUser({
      id: loggedInUser._id,
      name: '',
      email: '',
      profile_link: "",
      password: '',
      reEnterPassword: '',
    });
    navigate('/viewp');
  };
  const validate = () => {
    const errors = {};

    if (!user.name || user.name.trim().length < 4) {
      errors.name = 'Name should be at least 4 characters long';
    }

    if (!user.email || !user.email.endsWith('@lums.edu.pk')) {
      errors.email = 'Invalid email, please enter a valid LUMS email';
    }

    if (
      !user.password ||
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(user.password) ||
      user.password.trim().length < 8
    ) {
      errors.password =
        'Password should be at least 8 characters long with at least one uppercase letter, one lowercase letter, one number and one special character';
    }

    if (user.password !== user.reEnterPassword) {
      errors.reEnterPassword = 'Passwords do not match';
    }

    return errors;
  };

  const edit = async () => {
    const errors = validate();

    const form_data = new FormData();
    form_data.append('file', selectedImage);

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    console.log('img selected', form_data);
    try {
      const response = await axios.post('api/cloudinary/upload', form_data);
      console.log('hello', response.data);
      setp(response.data);
      console.log(p_img, 'p_img');

      axios
        .put('api/goals/updateProfile', { ...user, p_img: response.data})
        .then((res) => {
          // resdata should be user details user obj in reducer
          const updateSlicer = async () => {
            try {
              const response = await fetch(
                `api/goals/viewProfile/user${loggedInUser._id}`
              );
              if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
              }
              const user1 = await response.json();
              console.log('after update', user1);
              dispatch(setUserObj(user1));
              dispatch(setUserEmail(user1.email));
            } catch (error) {
              console.error(`Error fetching reviews: ${error.message}`);
            }
          };
          updateSlicer();
          setUser({
            id: loggedInUser._id,
            name: '',
            email: '',
            profile_link: '',
            password: '',
            reEnterPassword: '',
          });
          alert('Details changed');
          navigate('/viewp');
          // navigate("/login");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`api/goals/deleteUser/${loggedInUser._id}`);
      const data = await response.json();
      console.log(data.message); // Post successfully deleted from all collections.
      alert(data.message);
      // Add any other necessary logic after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error cases here, e.g. show an error message to the user
    }
  };
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log('here i am hello ', selectedImage);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  // useEffect(() => {
  // setErrors(validate());
  // }, [user]);
  return (
    <>
      <Header />
      <ProfileHeader />
      <div className='editp-main' style={{ margin: '15vw 0 -60px 0' }}>
        <div className='in'>
          <span className='reg'>
            <div className='r'>
              <span className='edit'>
                {console.log('User', user)}
                <h1 style={{ fontSize: '280%', color: '#1C0040' }}>
                  {' '}
                  Edit Profile
                </h1>
                <h2 style={{ color: '#1C0040' }}>Change Profile Pic</h2>
                {/* <div
                  className='editp-img-con'
                  // style={{ background: '#000000' }}
                > */}
                {selectedImage && (
                  <img
                    style={{
                      maxWidth: '60%',
                      marginBottom: '2%',
                      borderRadius: '5%',
                    }}
                    src={imagePreview}
                    alt='Profile'
                    className='img-fluid mt-3'
                  />
                )}
                {/* </div> */}
                <span className='up'>
                  {/* <button>upload profile</button> */}
                  {/* <input className= "pl" style={{fontFamily:"popins", color:"green", borderBlockColor:"purple"}} type="text" placeholder="Directry"  /> */}
                  <div className='form-group'>
                    {/* <label htmlFor="profilePicture">Profile Picture</label> */}
                    <div className='custom-file'>
                      <input
                        type='file'
                        className='custom-file-input'
                        id='profilePicture'
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </span>

                <h1 style={{ fontSize: '110%' }}>Name</h1>
                <input
                  type='text'
                  name='name'
                  value={user.name}
                  placeholder='Enter your full Name'
                  required='true'
                  pattern='^[A-Za-z0-9]{4,}$'
                  onChange={handleChange}
                />
                {errors.name && <span className='error'>{errors.name}</span>}
                <h1 style={{ fontSize: '110%' }}>Email</h1>

                <input
                  type='email'
                  name='email'
                  value={user.email}
                  placeholder=' Enter your Email'
                  onChange={handleChange}
                />
                {errors.email && <span className='error'>{errors.email}</span>}
                
                <h1 style={{ fontSize: '110%' }}>Facebook Messenger Profile Link</h1>

                <input
                  type='text'
                  name='profile_link'
                  value={user.profile_link}
                  // placeholder=' Enter your profile link'
                  onChange={handleChange}
                />
                <h1 style={{ fontSize: '110%' }}>Password</h1>

                <input
                  type='password'
                  name='password'
                  value={user.password}
                  placeholder=' Enter your Password'
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className='error'>{errors.password}</span>
                )}
                <h1 style={{ fontSize: '110%' }}>Confirm Password </h1>

                <input
                  type='password'
                  name='reEnterPassword'
                  value={user.reEnterPassword}
                  placeholder='Re-enter your Password'
                  onChange={handleChange}
                />
                {errors.reEnterPassword && (
                  <span className='error'>{errors.reEnterPassword}</span>
                )}

                <span style={{ display: 'flex' }}>
                  <button onClick={edit}>save</button>
                  <button
                    style={{ backgroundColor: 'whitesmoke', color: 'purple' }}
                    onClick={cancle}
                  >
                    Cancel
                  </button>
                </span>
                {/* <div className= "pl" style={{fontFamily:"popins", color:"green", borderBlockColor:"purple"}} type="text" placeholder="Directry"  /> */}
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className='del'>
        <h1 style={{ fontSize: '300%', color: '#1C0040' }}>Delete Profile</h1>
        <h2>Delete my account permanently</h2>
        <h2 style={{ color: '#CC0000' }}>Deleting account cannot be undone</h2>
        <button
          style={{ background: '#CC0000', color: 'white', width: '30%' }}
          onClick={() => setShowConfirmation(true)}
        >
          Delete Account
        </button>
        {showConfirmation && (
          <div className='confirmation'>
            <p>Are you sure you want to delete your account?</p>
            <button
              style={{ background: '#CC0000', color: 'white' }}
              onClick={handleDelete}
            >
              Yes
            </button>
            <button onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Edit;
