

import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig/firebaseConfig';
import { getDoc, doc } from "firebase/firestore";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import './ViewRooms.css'; 

function ViewRooms() {

  const handleDelete=()=>{
    console.log("clicked");
    

  }
  const handleEdit=()=>{
    console.log("edit btn clicked");
    
  }
  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getroomRef = await getDoc(doc(db, "owners", loggedInOwnerData.user.displayName));
        if (getroomRef.exists()) {
          const data = getroomRef.data();
          setRoomsData(data.rooms || []);
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 className="text-center py-5">Loading... please wait...</h2>;
  }

  return (
   <div className="container py-5">
  <h2 className="text-center mb-4 fw-bold gradient-text">🏨 Your Room Listings</h2>

  {roomsData.length === 0 ? (
    <p className="text-center text-muted">No rooms found.</p>
  ) : (
    <div className="room-grid">
      {roomsData.map((p, index) => (
        <div key={index} className="room-card">
          <img src={p.images} alt="Room" className="room-image" />

          <div className="room-details">
            <h4>Room No: <span>{p.roomNumber}</span></h4>
            <p>🛏 Type: <strong>{p.roomType}</strong></p>
            <p>💸 Price: <strong>₹{p.price}</strong></p>
            <p>🧍‍♂️ Total Beds: <strong>{p.totalBeds}</strong></p>
            <p>✅ Occupied: <strong>{p.occupiedBeds}</strong></p>

            <p className="desc">📝 {p.description}</p>

            <div className="amenities">
              {p.amenities?.map((a, i) => (
                <span key={i} className="amenity-tag">{a}</span>
              ))}
            </div>

            <p>
              Status:
              <span className={`status-badge ${p.availability === "Available" ? "green" : "red"}`}>
                {p.availability}
              </span>
            </p>

            <div className="action-buttons">
              <button className="btn edit" onClick={handleEdit}>
                <FaEdit /> Edit
              </button>
              <button className="btn delete" onClick={handleDelete}>
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
}

export default ViewRooms;

