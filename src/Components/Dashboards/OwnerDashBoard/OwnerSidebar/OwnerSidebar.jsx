import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaList, FaBullhorn, FaUtensils } from 'react-icons/fa';
import './OwnerSidebar.css';

function OwnerSidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">🏨 Owner Panel</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/ownerDashboard" activeclassname="active">
            <FaPlus /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="add_room" activeclassname="active">
            <FaPlus /> Add Room
          </NavLink>
        </li>
        <li>
          <NavLink to="view_rooms" activeclassname="active">
            <FaList /> View Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="post_notice" activeclassname="active">
            <FaBullhorn /> Post Notices
          </NavLink>
        </li>
        <li>
          <NavLink to="update_mess" activeclassname="active">
            <FaUtensils /> Add Mess Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="view_messmenu" activeclassname="active">
            <FaUtensils /> Update / View Messmenu
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default OwnerSidebar;
