// OwnerDashBoard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import OwnerSidebar from './OwnerSidebar/OwnerSidebar';
import './OwnerDashboard.css'; // external CSS for styling

function OwnerDashBoard() {
  return (
    <div className="dashboard-container">
      {/* <aside className="sidebar">
        <OwnerSidebar />
      </aside> */}
      <div className='sidebar'>
        <OwnerSidebar/>
      </div>

      <main className="main-content">
        <h2>Owner Dashboard</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default OwnerDashBoard;
