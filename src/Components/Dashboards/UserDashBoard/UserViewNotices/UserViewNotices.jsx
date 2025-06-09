import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig/firebaseConfig';
import './UserViewNotices.css';

function UserViewNotices() {
  const [userNotification, setUserNotification] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  async function fetchNotifications() {
    try {
      const collectionData = await getDocs(collection(db, "owners"));
      let userNotificationData = [];

      collectionData.docs.forEach((doc) => {
        const userNotificationDetails = doc.data().Notifications;

        if (userNotificationDetails) {
          userNotificationData.push(userNotificationDetails);
        }
      });

      setUserNotification(userNotificationData);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching notices:", err);
      setLoading(false);
    }
  }

  fetchNotifications();
}, []);

  // useEffect(() => {
  //   async function fetchNotifications() {
  //     try {
  //       const collectionData = await getDocs(collection(db, "owners"));
  //       let userNotificationData = [];

  //       collectionData.docs.forEach((doc) => {
  //         const userNotificationDetails = doc.data().Notifications || [];
  //         console.log(userNotificationDetails);
          
  //         // userNotificationDetails.forEach((n) => {
  //         //   userNotificationData.push(n);
  //         // });
  //       });

  //       setUserNotification(userNotificationData);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log("Error fetching notices:", err);
  //       setLoading(false);
  //     }
  //   }

  //   fetchNotifications();
  // }, []);

  return (
    <div className="notices-container">
      <h2>User Notices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : userNotification.length === 0 ? (
        <p>No notices found.</p>
      ) : (
        <div className="notice-list">
          {userNotification.map((notice, index) => (
            <div className="notice-card" key={index}>
              {typeof notice === 'string' ? (
                <p>{notice}</p>
              ) : (
                <>
                  <h3>{notice.title || `Notice ${index + 1}`}</h3>
                  <p>{notice.message || notice.description || 'No message provided.'}</p>
                  {notice.date && <small>📅 {notice.date}</small>}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserViewNotices;
