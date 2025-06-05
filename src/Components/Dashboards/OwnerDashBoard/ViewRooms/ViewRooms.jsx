

// import React, { useEffect, useState } from 'react';
// import { db } from '../../../firebaseConfig/firebaseConfig';
// import { getDoc, doc } from "firebase/firestore";

// function ViewRooms() {
//   const [roomsData, setRoomsData] = useState([]);
//   const [loading,setLoading]=useState([])
//   const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const getroomRef = await getDoc(doc(db, "owners", loggedInOwnerData.user.displayName));
//         if (getroomRef.exists()) {
//           const data = getroomRef.data();
//           console.log("Room Data: ", data.rooms);
//           setRoomsData(data.rooms || []);
//         } else {
//           console.log("No such document!");
//         }
//       } catch (err) {
//         console.log("Error fetching data: ", err);
//       }
//        setLoading(false);
//     };

//     fetchData();
//   }, []);
//   if (loading) {
//     return <h1 className="loading-text">Loading... please wait...</h1>;
//   }

//   return (
//     <div className="container py-5">
    
//       {roomsData.length === 0 ? (
//         <p className="text-center">No rooms found.</p>
//       ) : (
//         roomsData.map((p, index) => (
//           <div key={index} className="card p-3 mb-3 shadow">
//             <h5><strong>Room Number:</strong> {p.roomNumber}</h5>
//          <img src={p.images} alt="" style={{width:"200px" ,display:'flex'}}/>
//             <p><strong>Capacity:</strong> {p.capacity}</p>
//             <p><strong>Description:</strong> {p.description}</p>
//             <p><strong>Type:</strong> {p.roomType}</p>
//             <p><strong>Price:</strong> ₹{p.price}</p>
//             <p><strong>Status:</strong> {p.availability}</p>
//             <button>Delete</button>
//             <button>edit</button>

           
            

           
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default ViewRooms;

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
      <h2 className="text-center mb-4 fw-bold">🏨 Your Room Listings</h2>

      {roomsData.length === 0 ? (
        <p className="text-center text-muted">No rooms found.</p>
      ) : (
        <div className="row g-4">
          {roomsData.map((p, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="room-card shadow rounded p-3">
                <img
                  src={p.images}
                  alt="Room"
                  className="img-fluid rounded room-image mb-3"
                />
                <h5 className="mb-1"><strong>Room No:</strong> {p.roomNumber}</h5>
                <p className="mb-1"><strong>Type:</strong> {p.roomType}</p>
                <p className="mb-1"><strong>Capacity:</strong> {p.capacity}</p>
                <p className="mb-1"><strong>Price:</strong> ₹{p.price}</p>
                <p className="mb-1"><strong>Status:</strong> {p.availability}</p>
                <p className="mb-2"><strong>Description:</strong> {p.description}</p>

                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm w-45" onClick={handleDelete}>
                    <FaTrashAlt className="me-1" /> Delete
                  </button>
                  <button className="btn btn-primary btn-sm w-45" onClick={handleEdit}>
                    <FaEdit className="me-1" /> Edit
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

