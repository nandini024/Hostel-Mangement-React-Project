import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebaseConfig/firebaseConfig';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "./ViewMess.css"

function ViewMess() {
  const loggedInOwnerData = JSON.parse(localStorage.getItem("loggedInOwner"));
  const [messData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessData = async () => {
      try {
        const getmessRef = await getDoc(doc(db, "owners", loggedInOwnerData.user.displayName));
        if (getmessRef.exists()) {
          const data = getmessRef.data();
          const messMenuData = data.messmenu;

          if (Array.isArray(messMenuData)) {
            setMenuData(messMenuData);
          } else if (messMenuData && typeof messMenuData === 'object') {
            setMenuData([messMenuData]);
          } else {
            setMenuData([]);
          }
        } else {
          console.log("No such document!");
          setMenuData([]);
        }
      } catch (err) {
        console.log("Error fetching data: ", err);
        setMenuData([]);
      }
      setLoading(false);
    };

    fetchMessData();
  }, []);

  // DELETE MENU
  const handleDelete = async (index) => {
    const updatedMenu = [...messData];
    updatedMenu.splice(index, 1);

    try {
      await updateDoc(doc(db, "owners", loggedInOwnerData.user.displayName), {
        messmenu: updatedMenu
      });
      setMenuData(updatedMenu);
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  // EDITT 
  // const handleEdit = (dayData, index) => {
  //   localStorage.setItem("editMessDay", JSON.stringify({ ...dayData, index }));
  //   navigate("/edit-mess-day"); 
  // };

  if (loading) {
    return <h2 className="text-center py-5">Loading... please wait...</h2>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">🍽️ Weekly Mess Menu</h2>

      {messData.length === 0 ? (
        <p className="text-center">No mess menu available</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>📅 Day</th>
                <th>🍳 Breakfast</th>
                <th>🍛 Lunch</th>
                <th>🍽️ Dinner</th>
                <th>✏️ Actions</th>
              </tr>
            </thead>
            <tbody>
              {messData.map((menu, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{menu.day}</td>
                  <td>{menu.breakfast}</td>
                  <td>{menu.lunch}</td>
                  <td>{menu.dinner}</td>
                  <td>
                    {/* <button
                      className="btn btn-sm  btn-gradient  me-2"
                      onClick={() => handleEdit(menu, index)}
                    >
                      Edit
                    </button> */}
                    <button
                      className="btn  btn-gradient btn-sm btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewMess;
