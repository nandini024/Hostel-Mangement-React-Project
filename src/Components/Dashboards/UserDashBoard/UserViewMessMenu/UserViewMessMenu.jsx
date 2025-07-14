import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig/firebaseConfig';
import './UserViewMessMenu.css';

function UserViewMessMenu() {
  const [userMess, setUserMess] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchUserMessData() {
      try {
        const collectionData = await getDocs(collection(db, 'owners'));
        console.log(collectionData);
        
        let allMenus = [];
        //  / let messDetails;
        collectionData.docs.forEach((doc) => {
        const   messDetails = doc.data().messmenu ;
           if (Array.isArray(messDetails) && messDetails.length > 0) {
          allMenus = [...allMenus, ...messDetails]; // Flattened
        }
           console.log(messDetails);
           allMenus.push(messDetails)
           
          
        });
         


        // setUserMess(allMenus);
        // console.log(allMenus);
        
        // setLoading(false);        
         // ✅ Filter out any undefined/null
      setUserMess(allMenus.filter(Boolean));
      setLoading(false)
      } catch (err) {
        console.error('Error fetching mess menu:', err);
        setLoading(false);
      }
    }

    fetchUserMessData();
  }, []);
  console.log(userMess);

  return (
    <div className="user-mess-container">
      <h2 className="mess-heading">🍽️ User Mess Menu</h2>

      {loading ? (
        <p className="loading">Loading menu...</p>
      ) : userMess.length === 0 ?  (
        <p className="no-data">No menu available.</p>
      ) : (
        <div className="table-wrapper">
          <table className="mess-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {userMess.map((menu, index) =>
               (
                <tr key={index}>
                  <td>{menu.day}</td>
                  <td>{menu.breakfast}</td>
                  <td>{menu.lunch}</td>
                  <td>{menu.dinner}</td>
                </tr>
              )
             
              
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserViewMessMenu;
