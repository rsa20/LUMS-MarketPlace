import React, { useState } from 'react';
import axios from 'axios';

export default function Uploadimage() {
  const [values, setValues] = useState({
    imagePreviewUrls: [], // An array to store multiple image preview URLs
    picFiles: [], // An array to store multiple files
  });

  let fileInput = React.createRef();

  const editProfilePic = () => {
    fileInput.current.click();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    let urls = [];
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onloadend = () => {
        urls.push(reader.result);
        if (urls.length === files.length) {
          // When all URLs have been generated, update state
          setValues({
            ...values,
            picFiles: [...values.picFiles, ...files],
            imagePreviewUrls: [...values.imagePreviewUrls, ...urls],
          });
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleSubmit = async () => {
    console.log(values.picFiles);
    try {
      const formDataArray = [];
      for (let i = 0; i < values.picFiles.length; i++) {
        const formData = new FormData();
        formData.append('file', values.picFiles[i]);
        formDataArray.push(formData);
      }

      const responses = await Promise.all(
        formDataArray.map((formData) =>
          axios.post('api/cloudinary/upload', formData)
        )
      );
      console.log(responses);
    } catch (error) {
      alert(
        'Error occurred while uploading pictures, try uploading a smaller image size or try again later.'
      );
      console.error(error);
    }
  };

  const imagessss = values.imagePreviewUrls.map((url) => {
    return <img src={url} alt='...' style={{ objectFit: 'cover' }} />;
  });
  return (
    <div>
      <div onClick={() => editProfilePic()}>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={fileInput}
        />
        {imagessss}
        {/* <img 
               src={values.imagePreviewUrl}
               alt="..."
               style={{objectFit: 'cover'}}/> */}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
