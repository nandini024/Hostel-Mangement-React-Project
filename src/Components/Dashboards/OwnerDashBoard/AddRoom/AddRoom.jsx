import React, { useState } from "react";
import "./AddRoom.css";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddRoom() {
  const [imageUploading, setImageUploading] = useState(false);

  const navigate = useNavigate();
  const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));

  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "Single",
    capacity: "",
    price: "",
    availability: "Available",            
    description: "",
    amenities: [],
    images: "",
  });

  const [errors, setErrors] = useState({});   

  //SETTING IMAGE URL........!

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    setImageUploading(true);
    try {
      const imgFile = e.target.files[0];
      const imgurl = await uploadImageToCloudinary(imgFile);
      setFormData((prev) => ({ ...prev, images: imgurl }));
      toast.success("Image uploaded!");
    } catch (err) {
      console.log(err);
      toast.error("Image upload failed.");
    } finally {
      setImageUploading(false);
    }
  };

  //CLOUDINARYYY.............
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hostel_management");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dtnv89alf/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);

    if (!data.secure_url) throw new Error("Image upload failed.");
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ownerRef = doc(db, "owners", loggedInOwnerData.user.displayName);
      await updateDoc(ownerRef, { rooms: arrayUnion(formData) });

      toast.success("Room added successfully!");
      navigate("/ownerDashboard");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add room.");
    }
  };

  return (
    <div className="add-room-container">
      <h1>Add New Room</h1>
      <form className="add-room-form" onSubmit={handleSubmit}>
        <label>
          Room Number <span className="required">*</span>
          <input
            type="text"
            value={formData.roomNumber}
            onChange={(e) =>
              setFormData({ ...formData, roomNumber: e.target.value })
            }
          />
          {errors.roomNumber && (
            <p className="error-msg">{errors.roomNumber}</p>
          )}
        </label>

        <label>
          Room Type
          <select
            value={formData.roomType}
            onChange={(e) =>
              setFormData({ ...formData, roomType: e.target.value })
            }
          >
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
            value={formData.capacity}
            onChange={(e) =>
              setFormData({ ...formData, capacity: e.target.value })
            }
          />
          {errors.capacity && <p className="error-msg">{errors.capacity}</p>}
        </label>

        <label>
          Price per Month ($) <span className="required">*</span>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </label>

        <label>
          Availability
          <select
            value={formData.availability}
            onChange={(e) =>
              setFormData({ ...formData, availability: e.target.value })
            }
          >
            <option>Available</option>
            <option>Occupied</option>
            <option>Under Maintenance</option>
          </select>
        </label>

        <label>
          Description
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="3"
          />
        </label>

         {/* Amenities checkboxes individually handled */}
        <fieldset className="amenities-fieldset">
          <legend>Amenities</legend>
          {["Wi-Fi", "AC", "Attached Bathroom", "Balcony"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={formData.amenities.includes(item)}
                onChange={(e) => {
                  const updatedAmenities = e.target.checked
                    ? [...formData.amenities, item]
                    : formData.amenities.filter((a) => a !== item);
                  setFormData({ ...formData, amenities: updatedAmenities });
                }}
              />
              {item}
            </label>
          ))}
        </fieldset>

        <label>
          Upload Image <span className="required">*</span>
          <input type="file" accept="image/*" onChange={handleImageSubmit} />
          {errors.images && <p className="error-msg">{errors.images}</p>}
        </label>

        <button
          type="submit"
          className="submit-btn"
          disabled={imageUploading || !formData.images}
        >
          {imageUploading ? "Uploading Image..." : "Add Room"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddRoom;
