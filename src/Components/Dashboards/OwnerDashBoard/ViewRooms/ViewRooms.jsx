// 

import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig/firebaseConfig';
import { getDoc, doc } from "firebase/firestore";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import './ViewRooms.css'; 

function ViewRooms() {
  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

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
    return <h2 className="vr-text-center vr-loading-text">Loading... please wait...</h2>;
  }

  return (
    <div className="vr-container">
      <h2 className="vr-heading">🏨 Your Room Listings</h2>

      {roomsData.length === 0 ? (
        <p className="vr-text-center vr-muted">No rooms found.</p>
      ) : (
        <div className="vr-room-grid">
          {roomsData.map((p, index) => (
            <div key={index} className="vr-room-card">
              <img src={p.images} alt="Room" className="vr-room-image" />
              <div className="vr-room-details">
                <h4>Room No: <span>{p.roomNumber}</span></h4>
                <p>🛏 Type: <strong>{p.roomType}</strong></p>
                <p>💸 Price: <strong>₹{p.price}</strong></p>
                <p>🧍‍♂️ Total Beds: <strong>{p.totalBeds}</strong></p>
                <p>✅ Occupied: <strong>{p.occupiedBeds}</strong></p>
                <p className="vr-desc">📝 {p.description}</p>

                <div className="vr-amenities">
                  {p.amenities?.map((a, i) => (
                    <span key={i} className="vr-amenity-tag">{a}</span>
                  ))}
                </div>

                <p>
                  Status:
                  <span className={`vr-status-badge ${p.availability === "Available" ? "vr-green" : "vr-red"}`}>
                    {p.availability}
                  </span>
                </p>

                <div className="vr-action-buttons">
                  <button className="vr-btn vr-edit" onClick={handleEdit}>
                    <FaEdit /> Edit
                  </button>
                  <button className="vr-btn vr-delete" onClick={handleDelete}>
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
