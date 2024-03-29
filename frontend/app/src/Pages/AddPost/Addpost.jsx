import React, { useState } from 'react';
import './Addpost.css';
import axios from 'axios';
import img from './img.jpg';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import ProfileHeader from '../../Components/Phead/Fh';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [Post, setPost] = useState({
    title: '',
    description: '',
    price: '',
    tags: '',
  });
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  console.log(userEmail, 'idhr');
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);

  const [selectedImage, setSelectedImage] = useState(img);
  const [imagePreview, setImagePreview] = useState(img);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...Post,
      [name]: value,
    });
  };
  const cancle = () => {
    setPost({
      title: '',
      description: '',
      price: '',
      tags: '',
    });
  };
  const validate = () => {
    const errors = {};

    if (!Post.title || Post.title.trim().length < 3) {
      errors.name = 'Title should be at least 3 characters long';
    }

    if (
      !Post.description ||
      Post.description.trim().split(/\s+/).length < 3 ||
      Post.description.trim().split(/\s+/).length > 250
    ) {
      errors.description = 'Description must be between 3 and 250 words long';
    }

    return errors;
  };
  const edit = async () => {
    const errors = validate();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    const formData = new FormData();
    formData.append('title', Post.title);
    formData.append('description', Post.description);
    formData.append('price', Post.price);
    formData.append('tags', Post.tags.trim().replace(/\s+/g, ' '));
    images.forEach((image) => formData.append('images', image));
    console.log('post', Post);
    console.log('images', images);

    try {
      const formDataArray = [];
      for (let i = 0; i < images.length; i++) {
        const formDatai = new FormData();
        formDatai.append('file', images[i]);
        formDataArray.push(formDatai);
      }

      const responses = await Promise.all(
        formDataArray.map((formData) =>
          axios.post('https://good-tan-woodpecker-wrap.cyclic.app/api/cloudinary/upload', formData)
        )
      );
      console.log(responses);
      const imgUrlArray = [];
      responses.forEach((response) => {
        imgUrlArray.push(response.data);
      });

      console.log(imgUrlArray);
      // sending post details to backend
      axios
        .post('https://good-tan-woodpecker-wrap.cyclic.app/api/posts/createPost', {
          params: { Post, loggedInUser, imgUrlArray },
        })
        .then((res) => {
          alert('post Added');
          console.log(res);
          // navigate('/home');
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } catch (error) {
      alert(
        'Error occurred while uploading pictures, try uploading a smaller image size or try again later.'
      );
      console.error(error);
    }
    // axios
    //   .post('api/posts/createPost', { params: { Post, userEmail } })
    //   .then((res) => {
    //     alert('post Added');
    //     console.log(res);
    //     navigate('/home');
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.message);
    //   });
  };

  const handleImageChange = (e) => {
    const newImages = [...images, ...e.target.files];
    setImages(newImages);
    setSelectedImage(URL.createObjectURL(newImages[0]));
    setImagePreview(URL.createObjectURL(newImages[0]));
  };

  return (
    <>
      <Header />
      <ProfileHeader />
      <div className='main' style={{ margin: '15vw 0 -60px 0' }}>
        <div className='in'>
          <span className='reg'>
            <div className='r'>
              <span className='edit'>
                {console.log('Post', Post)}
                <h1 style={{ fontSize: '280%', color: '#1C0040' }}>Add Post</h1>
                <h2 style={{ color: '#1C0040' }}>Upload Product Images</h2>

                {selectedImage && (
                  <img
                    style={{
                      maxWidth: '60%',
                      marginBottom: '2%',
                      borderRadius: '5%',
                    }}
                    src={imagePreview}
                    alt='Profile'
                    className='img-fluidi'
                  />
                )}
                <span className='up'>
                  <div className='form-group'>
                    <div className='custom-file'>
                      <input
                        type='file'
                        className='custom-file-input'
                        id='profilePicture'
                        onChange={handleImageChange}
                        multiple
                      />
                    </div>
                  </div>
                  <div className='image-preview'>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Product ${index + 1}`}
                        className='img-fluid'
                      />
                    ))}
                  </div>
                </span>

                <h1 style={{ marginLeft: '-85%', fontSize: '110%' }}>Title</h1>
                <input
                  type='text'
                  name='title'
                  value={Post.title}
                  placeholder='Enter Product Title'
                  required='true'
                  pattern='^[A-Za-z0-9]{4,}$'
                  onChange={handleChange}
                />
                {errors.name && <span className='error'>{errors.name}</span>}
                <h1 style={{ marginLeft: '-75%', fontSize: '110%' }}>
                  Description
                </h1>

                <input
                  type='text'
                  name='description'
                  value={Post.description}
                  placeholder=' Enter profile description'
                  onChange={handleChange}
                />
                {errors.description && (
                  <span className='error'>{errors.description}</span>
                )}

                <h1 style={{ marginLeft: '-85%', fontSize: '110%' }}>Price</h1>

                <input
                  type='Text'
                  name='price'
                  value={Post.price}
                  placeholder=' Enter product status'
                  onChange={handleChange}
                />

                <h1 style={{ marginLeft: '-85%', fontSize: '110%' }}>Tags </h1>
                <input
                  type='string'
                  name='tags'
                  value={Post.tags}
                  placeholder='Enter Products Tags'
                  onChange={handleChange}
                />
                <span style={{ display: 'flex' }}>
                  <button onClick={edit}>Post</button>
                  <button
                    style={{ backgroundColor: 'whitesmoke', color: 'purple' }}
                    onClick={cancle}
                  >
                    Cancel
                  </button>
                </span>
              </span>
            </div>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Add;
