// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import UserSideBar from './UserSideBar/UserSideBar';
// import './UserDashboard.css';

// function UserDashboard() {
//   return (
//     <div className="user-dashboard-container">
//       <div className="user-sidebar">
//         <UserSideBar />
//       </div>

//       <main className="user-main-content">
//         <h2>User Dashboard</h2>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default UserDashboard;
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSideBar from './UserSideBar/UserSideBar';
import './UserDashBoard.css';

function UserDashboard() {
  return (
    <div className="user-dashboard-container">
      <div className="user-sidebar">
        <UserSideBar />
      </div>

      <main className="user-main-content">
        <h2>User Dashboard</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default UserDashboard;
