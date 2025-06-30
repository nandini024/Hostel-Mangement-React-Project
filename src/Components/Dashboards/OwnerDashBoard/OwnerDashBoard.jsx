import React from 'react';
import { Outlet } from 'react-router-dom';
import OwnerSidebar from './OwnerSidebar/OwnerSidebar';
import './OwnerDashBoard.css'; 

function OwnerDashBoard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <OwnerSidebar />
      </div>

      <main className="main-content">
        <h2>Owner Dashboard</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default OwnerDashBoard;
