import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBed, FaUtensils, FaBell } from 'react-icons/fa';
import './UserSideBar.css';

function UserSideBar() {
  return (
    <div className="user-sidebar-nav">
      <NavLink to="/userDashboard" className={({ isActive }) => isActive ? 'active' : ''}>
        <FaHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="user_view_rooms" className={({ isActive }) => isActive ? 'active' : ''}>
        <FaBed />
        <span>View Rooms</span>
      </NavLink>
      <NavLink to="user_view_messmenu" className={({ isActive }) => isActive ? 'active' : ''}>
        <FaUtensils />
        <span>Mess Menu</span>
      </NavLink>
      <NavLink to="user_view_notice" className={({ isActive }) => isActive ? 'active' : ''}>
        <FaBell />
        <span>Notices</span>
      </NavLink>
    </div>
  );
}

export default UserSideBar;
