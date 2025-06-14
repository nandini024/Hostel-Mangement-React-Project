import React, { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  getDoc
} from "firebase/firestore";
import "./UserViewRooms.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ViewRooms() {
  const [rooms, setRooms] = useState([]);
  const [bookedRoom, setBookedRoom] = useState({});

  const [loading, setLoading] = useState(true);
  const loggedInUserData = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  //HANDLE BOOKED ROOM

  const handleBookNow = async (bookedroom) => {
    // e.preventDefault();

    try {
      const userBooking = doc(db, "users", loggedInUserData.user.displayName);
      const userDocSnap = await getDoc(userBooking);

    let existingBookedRooms = [];
    if (userDocSnap.exists()) {
      existingBookedRooms = userDocSnap.data().bookedRooms || [];
    }

    const updatedRooms = [...existingBookedRooms, bookedroom];

    await updateDoc(userBooking, {
      bookedRooms: updatedRooms,
    });

      toast.success("Room booked successfully!");
      navigate("/userDashboard");
      // console.log(rooms);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add room.");
    }
  };

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
          <div className="room-image-wrapper">
            <img
              src={
                room.images ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={`Room ${room.roomNumber}`}
            />
          </div>
          <div className="room-details">
            <h2>Room {room.roomNumber}</h2>
            <p>
              <strong>🛏 Type:</strong> {room.roomType}
            </p>
            <p>
              <strong>👥 Capacity:</strong> {room.capacity}
            </p>
            <p>
              <strong>💰 Price:</strong> ₹{room.price}
            </p>
            <p
              className={`status ${
                room.availability === "Unavailable"
                  ? "unavailable"
                  : "available"
              }`}
            >
              <strong>🔒 Status:</strong> {room.availability}
            </p>
            <button
              className="book-btn"
              onClick={() => handleBookNow(room)}
              // disabled={room.availability === "Unavailable"}
            >
              {/* {room.availability === "Unavailable" ? "Booked" : "Book Now"} */}
              Book Now
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default ViewRooms;
