

// import React, { useEffect, useState } from "react";
// import { db } from "../../../firebaseConfig/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import "./UserViewRooms.css";
// import { toast, ToastContainer } from "react-toastify";

// function UserViewRooms() {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchAllRooms = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "owners"));
//         let allRooms = [];

//         querySnapshot.forEach((docSnap) => {
//           const ownerData = docSnap.data();
//           if (ownerData.rooms && Array.isArray(ownerData.rooms)) {
//             const ownerRooms = ownerData.rooms.map((room) => {
//               const total = parseInt(room.totalBeds || 0);
//               const occ = parseInt(room.occupiedBeds || 0);
//               const temp = parseInt(room.tempBlockedBeds || 0);
//               const isAvailable = total > occ + temp;
//               return {
//                 ...room,
//                 availability: isAvailable ? "Available" : "Unavailable",
//               };
//             });
//             allRooms = [...allRooms, ...ownerRooms];
//           }
//         });

//         setRooms(allRooms);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//         toast.error("Failed to load rooms.");
//       }
//     };

//     fetchAllRooms();
//   }, []);

//   return (
//     <div className="user-view-rooms">
//       <h2>Available Rooms</h2>
//       <div className="room-card-container">
//         {rooms.length === 0 ? (
//           <p>No rooms available.</p>
//         ) : (
//           rooms.map((room, index) => (
//             <div className="room-card" key={index}>
//               <img src={room.images} alt="Room" className="room-image" />
//               <div className="room-details">
//                 <h3>Room {room.roomNumber} ({room.roomType})</h3>
//                 <p><strong>Beds:</strong> {room.occupiedBeds} occupied / {room.totalBeds} total</p>
//                 <p><strong>Temp Blocked:</strong> {room.tempBlockedBeds}</p>
//                 <p><strong>Price:</strong> ₹{room.price}</p>
//                 <p><strong>Status:</strong>
//                   <span className={room.availability === "Available" ? "available" : "unavailable"}>
//                     {room.availability}
//                   </span>
//                 </p>
//                 <p><strong>Description:</strong> {room.description}</p>
//                 <p><strong>Amenities:</strong> {room.amenities?.join(", ")}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default UserViewRooms;
import React, { useEffect, useState } from "react";
import "./UserViewRooms.css";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { collection, getDocs,doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UserViewRooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoomsFromOwners();
  }, []);

  const fetchRoomsFromOwners = async () => {
    try {
      const ownersSnapshot = await getDocs(collection(db, "owners"));
      const allRooms = [];

      ownersSnapshot.forEach((ownerDoc) => {
        const ownerData = ownerDoc.data();
        const ownerRooms = ownerData.rooms || [];
        ownerRooms.forEach((room) => {
          allRooms.push({ ...room, ownerName: ownerData.name || ownerDoc.id });
        });
      });

      setRooms(allRooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      toast.error("Failed to load rooms.");
    }
  };

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

  return (
    <div className="user-view-rooms-container">
      <h2>Available Rooms</h2>
      <div className="room-cards-wrapper">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.images} alt="Room" className="room-image" />
            <div className="room-details">
              <h3>{room.roomType} - Room {room.roomNumber}</h3>
              <p><strong>Owner:</strong> {room.ownerName}</p>
              <p><strong>Total Beds:</strong> {room.totalBeds}</p>
            
              
              <p><strong>Price:</strong> ₹{room.price} / month</p>
              <p><strong>Description:</strong> {room.description}</p>
              <p><strong>Amenities:</strong> {room.amenities?.join(", ")}</p>
              <p>
                <strong>Status: </strong>
                <span
                  className={
                    room.availability === "Available" ? "status-available" : "status-unavailable"
                  }
                >
                  {room.availability}
                </span>
              </p>

              {room.availability === "Available" ? (
                <button className="book-now-btn" onClick={() => handleBookNow(room)}>
                  Book Now
                </button>
              ) : (
                <button className="unavailable-btn" disabled>
                  Unavailable
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserViewRooms;
