import React, { useState } from 'react';
import axios from 'axios';

export default function Uploadimage() { 
   const [values, setValues] = useState({
      imagePreviewUrl: "", 
      picFile: null
   })
   let fileInput = React.createRef(); 

   const editProfilePic = () => {
      fileInput.current.click();
   } 

   const handleImageChange = e => {
      e.preventDefault();
      let reader = new FileReader();
      let inFile = e.target.files[0];
      reader.onloadend = () => {
         setValues({...values, 
            picFile: inFile, 
            imagePreviewUrl: reader.result
         })
      };
      reader.readAsDataURL(inFile);
   };

   const handleSubmit = async() => {
      // Create a FormData object to store the file object
      const form_data = new FormData();
      form_data.append('file', values.picFile);

      // Send the form data to the API endpoint using axios
      try {
         const response = await axios.post('api/cloudinary/upload', form_data);
         console.log(response);
      } catch (error) {
         alert("Error occurred while uploading picture, try uploading a smaller image size or try again later.");
         console.error(error);
      }
   }

   return(
      <div>
         <div onClick={() => editProfilePic()}>
            <input 
               type="file"
               accept="image/*"
               onChange={handleImageChange}
               ref={fileInput} />
            <img 
               src={values.imagePreviewUrl}
               alt="..."
               style={{objectFit: 'cover'}}/>
         </div> 
         <button onClick={handleSubmit}>Submit</button>
      </div>
   )
}