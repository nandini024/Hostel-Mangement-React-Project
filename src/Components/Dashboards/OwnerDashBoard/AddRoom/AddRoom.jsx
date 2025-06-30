import React, { useState, useEffect } from "react";
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
    totalBeds: "",
    occupiedBeds: 0,
    tempBlockedBeds: 0,
    price: "",
    availability: "Available",
    description: "",
    amenities: [],
    images: "",
  });

  // Update availability automatically based on beds
  useEffect(() => {
    const total = parseInt(formData.totalBeds || 0);
    const occ = parseInt(formData.occupiedBeds || 0);
    const temp = parseInt(formData.tempBlockedBeds || 0);

    if (total !== 0 && occ + temp >= total) {
      setFormData((prev) => ({ ...prev, availability: "Unavailable" }));
    } else {
      setFormData((prev) => ({ ...prev, availability: "Available" }));
    }
  }, [formData.totalBeds, formData.occupiedBeds, formData.tempBlockedBeds]);

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

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hostel_management");

    const response = await fetch("https://api.cloudinary.com/v1_1/dtnv89alf/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
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
            onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
            required
          />
        </label>

        <label>
          Room Type
          <select
            value={formData.roomType}
            onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
          >
            <option>Single</option>
            <option>Double</option>
            <option>Triple</option>
            <option>Deluxe</option>
          </select>
        </label>

        <label>
          Total Beds <span className="required">*</span>
          <input
            type="number"
            min="1"
            value={formData.totalBeds}
            onChange={(e) => setFormData({ ...formData, totalBeds: e.target.value })}
            required
          />
        </label>

        <label>
          Occupied Beds
          <input
            type="number"
            min="0"
            value={formData.occupiedBeds}
            onChange={(e) => setFormData({ ...formData, occupiedBeds: e.target.value })}
          />
        </label>

        <label>
          Temporarily Blocked Beds
          <input
            type="number"
            min="0"
            value={formData.tempBlockedBeds}
            onChange={(e) => setFormData({ ...formData, tempBlockedBeds: e.target.value })}
          />
        </label>

        <label>
          Price per Month (₹) <span className="required">*</span>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="3"
          />
        </label>

        <fieldset className="amenities-fieldset">
          <legend>Amenities</legend>
          {["Wi-Fi", "AC", "Attached Bathroom", "Balcony"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={formData.amenities.includes(item)}
                onChange={(e) => {
                  const updated = e.target.checked
                    ? [...formData.amenities, item]
                    : formData.amenities.filter((a) => a !== item);
                  setFormData({ ...formData, amenities: updated });
                }}
              />
              {item}
            </label>
          ))}
        </fieldset>

        <label>
          Upload Image <span className="required">*</span>
          <input type="file" accept="image/*" onChange={handleImageSubmit} />
        </label>

        <div className="auto-status">
          <strong>Room Availability: </strong>
          <span
            style={{
              color: formData.availability === "Unavailable" ? "red" : "green",
              fontWeight: "bold",
              marginLeft: "8px",
            }}
          >
            {formData.availability}
          </span>
        </div>

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
