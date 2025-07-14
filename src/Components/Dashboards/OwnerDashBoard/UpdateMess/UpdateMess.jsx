import React, { useState } from 'react';
import './UpdateMess.css';
import { db } from '../../../firebaseConfig/firebaseConfig';
import {doc,updateDoc,getDoc} from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function UpdateMess() {


  //TAKING DATA FROM THE LOCAL STORAGE..................! 
 const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));
 console.log(loggedInOwnerData)

  const [menuData,setMenuData] = useState({
    day: '',
    breakfast: '',
    lunch: '',
    dinner: '',
  });
  

  
//HANDLE FUNCTIONSS...........
const navigate=useNavigate()
 const handleSubmit = async (e) => {
       e.preventDefault();
   
       try {
         const ownermessRef = doc(db, "owners", loggedInOwnerData.user.displayName);
         const docSnap = await getDoc(ownermessRef);
        let existingMenu = []; 

      if (docSnap.exists()) {
        const data = docSnap.data();
        existingMenu = Array.isArray(data.messmenu) ? data.messmenu : [];
      }

      // Append new data to existing messmenu
      const updatedMenu = [...existingMenu, menuData];
         
         await updateDoc(ownermessRef, { messmenu:updatedMenu});
   
         toast.success("Menu  added successfully!");
          setTimeout(() => {
      navigate("/ownerDashboard");
    }, 1500);
        
       } catch (err) {
         console.error(err);
         toast.error("Failed to add  Mess Menu");
       }
    
     
      
  

      }
  return (
    <div className="mess-form-container">
      <h2>🍽️ Update Mess Menu</h2>
      <form onSubmit={handleSubmit} className="mess-form">
        <div className="form-group">
          <label>Select Day</label>
          <select name="day"   required   onChange={(e)=>setMenuData({...menuData, day:e.target.value})} >
            <option value="">-- Choose a day --</option>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Breakfast</label>
          <input
            type="text"
            name="breakfast"
            placeholder="e.g., Idli, Dosa"
        
            onChange={(e)=>setMenuData({...menuData, breakfast:e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Lunch</label>
          <input
            type="text"
            name="lunch"
            placeholder="e.g., Rice, Sambar"
            
            onChange={(e)=>setMenuData({...menuData,lunch:e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Dinner</label>
          <input
            type="text"
            name="dinner"
            placeholder="e.g., Chapati, Curry"
            
            onChange={(e)=>setMenuData({...menuData,dinner:e.target.value})}
          />
        </div>

        <button type="submit" className="btn-submit">Update Menu</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default UpdateMess;
