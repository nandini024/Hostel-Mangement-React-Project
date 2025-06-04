// AddRoom.js
import React, { useState } from 'react';
import './AddRoom.css';
import {updateDoc,doc,arrayUnion} from "firebase/firestore"
import { db } from '../../../firebaseConfig/firebaseConfig';
import { toast ,ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function AddRoom() {
  const loggedInOwnerData=JSON.parse(localStorage.getItem("loggedInOwner"))
  console.log(loggedInOwnerData)
  const [formData, setFormData] = useState({
    roomNumber: '',
    roomType: 'Single',
    capacity: '',
    price: '',
    availability: 'Available',
    description: '',
    amenities: [],
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      let newAmenities = [...formData.amenities];
      if (checked) {
        newAmenities.push(value);
      } else {
        newAmenities = newAmenities.filter((a) => a !== value);
      }
      setFormData({ ...formData, amenities: newAmenities });
    } else if (type === 'file') {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Simple validation
  const validate = () => {
    const errs = {};
    if (!formData.roomNumber.trim()) errs.roomNumber = 'Room Number is required';
    if (!formData.capacity || formData.capacity <= 0) errs.capacity = 'Capacity must be > 0';
    if (!formData.price || formData.price <= 0) errs.price = 'Price must be > 0';
    return errs;
  };

  // Submit handler

const navigate=useNavigate()
  const handleSubmit = async(e) => {
        e.preventDefault();
  
    try{
      const ownerRoomData=doc(db,"owners",loggedInOwnerData.user.displayName)
      
     await updateDoc(ownerRoomData, {
     rooms: arrayUnion(formData)
     })
     toast.success("Room details Added  sucessfully")
     navigate("/ownerDashboard")

    }
    catch(err){
      console.log(err)

    }

  
  
  



    

  

    
  };

  return (
    <div className="add-room-container">
      <h1>Add New Room</h1>
      {successMsg && <p className="success-msg">{successMsg}</p>}

      <form className="add-room-form" onSubmit={handleSubmit} noValidate>
        <label>
          Room Number <span className="required">*</span>
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            placeholder="e.g., A101"
          />
          {errors.roomNumber && <p className="error-msg">{errors.roomNumber}</p>}
        </label>

        <label>
          Room Type
          <select name="roomType" value={formData.roomType} onChange={handleChange}>
            <option>Single</option>
            <option>Double</option>
            <option>Triple</option>
            <option>Deluxe</option>
          </select>
        </label>

        <label>
          Capacity <span className="required">*</span>
          <input
            type="number"
            name="capacity"
            min="1"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="Number of occupants"
          />
          {errors.capacity && <p className="error-msg">{errors.capacity}</p>}
        </label>

        <label>
          Price per Month ($) <span className="required">*</span>
          <input
            type="number"
            name="price"
            min="0"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g., 500"
          />
          {errors.price && <p className="error-msg">{errors.price}</p>}
        </label>

        <label>
          Availability
          <select name="availability" value={formData.availability} onChange={handleChange}>
            <option>Available</option>
            <option>Occupied</option>
            <option>Under Maintenance</option>
          </select>
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Additional room details..."
            rows="3"
          />
        </label>

        <fieldset className="amenities-fieldset">
          <legend>Amenities</legend>
          {['Wi-Fi', 'AC', 'Attached Bathroom', 'Balcony'].map((amenity) => (
            <label key={amenity} className="checkbox-label">
              <input
                type="checkbox"
                name="amenities"
                value={amenity}
                checked={formData.amenities.includes(amenity)}
                onChange={handleChange}
              />
              {amenity}
            </label>
          ))}
        </fieldset>

        <label className="file-input-label">
          Upload Images
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-btn">Add Room</button>
      </form>
      <ToastContainer/>
    </div>

  );
}

export default AddRoom;
