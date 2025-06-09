import React, { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./UserViewRooms.css";

function ViewRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchRooms() {
      try {
        const collectionData = await getDocs(collection(db, "owners"));
        let roomsData = [];

        collectionData.docs.forEach((doc) => {
          const roomsDetails = doc.data().rooms || [];
          roomsDetails.forEach((room) => {
            roomsData.push(room);
          });
        });

        setRooms(roomsData);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false); 
      }
    }

    fetchRooms();
  }, []);

  //  LOADING............
  if (loading) {
    return <p>Loading rooms...</p>;
  }

  //  NO DATA FOUND
  if (rooms.length === 0) {
    return <p>No rooms available.</p>;
  }

  // DISPLAYing DATA
  return (
    <div className="rooms-container">
      {rooms.map((room, index) => (
        <div key={index} className="room-card">
          <img
            src={room.images || 'https://via.placeholder.com/250x150?text=No+Image'}
            alt={`Room ${room.roomNumber}`}
            className="room-image"
          />
          <h3>Room {room.roomNumber}</h3>
          <p>Type: {room.roomType}</p>
          <p>Capacity: {room.capacity}</p>
          <p>Price: ₹{room.price}</p>
          <p>Status: {room.availability}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default ViewRooms;
