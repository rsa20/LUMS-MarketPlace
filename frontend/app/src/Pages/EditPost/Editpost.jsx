import React, { useState } from 'react';
import './Editpost.css';
import axios from 'axios';
import img from './img.jpg';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import ProfileHeader from '../../Components/Phead/Fh';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Editpost = () => {
  const location = useLocation();
  const [productDetails, setProduct] = useState('');
  useEffect(() => {
    console.log(location.state, 'test');
    if (location.state) {
      setProduct(location.state.productDetails);
    }
  }, [location.state]);
  const [Post, setPost] = useState({
    title: productDetails.title,
    description: productDetails.description,
    price: productDetails.price,
    tags: '',
  });

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
      title: productDetails.title,
      description: productDetails.description,
      price: productDetails.price,
      tags: '',
    });
  };
  const validate = () => {
    // const errors = {};
    // if (!Post.title || Post.title.trim().length < 3) {
    //   errors.name = "Name should be at least 3 characters long";
    // }
    // if (!Post.description || Post.description.trim().split(/\s+/).length < 3 || Post.description.trim().split(/\s+/).length > 250) {
    //     errors.description = "Description must be between 3 and 250 words long";
    //   }
    // return errors;
  };
  const edit = () => {
    const errors = validate();
    if (errors) {
      if (Object.keys(errors).length) {
        setErrors(errors);
        return;
      }
    }
    const formData = new FormData();
    formData.append('title', Post.title);
    formData.append('description', Post.description);
    formData.append('price', Post.price);
    formData.append('tags', Post.tags.trim().replace(/\s+/g, ' '));
    images.forEach((image) => formData.append('images', image));
    console.log(Post, 'at edit button');
    axios
      .put(`api/posts/editpost/${productDetails._id}`, { params: { Post } })
      .then((res) => {
        alert('post updated');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
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
                <h1 style={{ fontSize: '280%', color: '#1C0040' }}>
                  {' '}
                  Add Post
                </h1>
                <h2 style={{ color: '#1C0040' }}>upload Product Images</h2>

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
                        alt={`Product image ${index + 1}`}
                        className='img-fluid mt-3'
                      />
                    ))}
                  </div>
                </span>

                <h1 style={{ marginLeft: '-85%', fontSize: '110%' }}>Title</h1>
                <input
                  type='text'
                  name='title'
                  value={Post.title}
                  placeholder={productDetails.name}
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
                  placeholder={productDetails.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <span className='error'>{errors.description}</span>
                )}

                <label
                  style={{ marginLeft: '-85%', fontSize: '110%' }}
                  htmlFor='price'
                >
                  Price
                </label>

                <input
                  type='Text'
                  name='price'
                  value={Post.price}
                  placeholder={productDetails.price}
                  onChange={handleChange}
                />
                <label
                  style={{ marginLeft: '-85%', fontSize: '110%' }}
                  htmlFor='price'
                >
                  Tags
                </label>

                <input
                  type='Text'
                  name='tags'
                  value={Post.price}
                  placeholder='enter Tags'
                  onChange={handleChange}
                />

                <span style={{ display: 'flex' }}>
                  <button onClick={edit}>Edit</button>
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
export default Editpost;
