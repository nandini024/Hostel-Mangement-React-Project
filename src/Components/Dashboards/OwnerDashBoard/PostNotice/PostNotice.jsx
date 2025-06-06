import React, { useState } from 'react';
import { db } from '../../../firebaseConfig/firebaseConfig';
import {doc,updateDoc,arrayUnion} from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
function PostNotification({ onPost }) {

  
  
  // const [title, setTitle] = useState(''); 
  const [notification, setNotification] = useState({ title:"",message:""

  });

//Taking Data FROM LOCAL STORAGE.....    

    const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));

const navigate=useNavigate()
 const handleNotificationSubmit = async (e) => {
     e.preventDefault();
 
     try {
       const ownerRef = doc(db, "owners", loggedInOwnerData.user.displayName);
       await updateDoc(ownerRef, { Notifications:notification });
 
       toast.success("Notification addedsuccessfully!");
       navigate("/ownerDashboard");
     } catch (err) {
       console.error(err);
       toast.error("Failed to add  Notification.");
     }
  
   
    


  
   
  };

  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4 text-center">Post Notification</h3>
      <form onSubmit={handleNotificationSubmit}>
        <div className="mb-3">
          <label htmlFor="notificationTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="notificationTitle"
            className="form-control"
            placeholder="Enter notification title"
            
                       onChange={(e) => setNotification({...notification,title:e.target.value})}

          />
        </div>

        <div className="mb-3">
          <label htmlFor="notificationMessage" className="form-label">
            Message
          </label>
          <textarea
            id="notificationMessage"
            className="form-control"
            rows="4"
            placeholder="Enter notification message"
       
            onChange={(e) => setNotification({...notification,message:e.target.value})}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Post Notification
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default PostNotification;
