// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';

// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signOut } from "firebase/auth";
// import { CgProfile } from "react-icons/cg";
// import { FaHome, FaBed, FaUserAlt, FaInfoCircle } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import './NavbarComp.css';

// function NavbarComp() {
//   const navigate = useNavigate();
//   const loggedinUser = JSON.parse(localStorage.getItem("loggedInUser")) || JSON.parse(localStorage.getItem("loggedInOwner"));

//   const logout = async () => {
//     const auth = getAuth();
//     try {
//       await signOut(auth);
//       localStorage.removeItem("loggedInUser");
//       localStorage.removeItem("loggedInOwner");
//       navigate("/login");
//       toast.success("Successfully Logged Out");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Navbar expand="lg" className="custom-navbar shadow-sm" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="brand-text">
//           🏨 Karthik Coliving
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto nav-links">
//             <Link to='/home' className="nav-link"><FaHome /> Home</Link>
//             <Link to='/about' className="nav-link"><FaInfoCircle /> About</Link>
//             <Link to='/rooms' className="nav-link"><FaBed /> Rooms</Link>
//             <Link to='/contact' className="nav-link"><FaUserAlt /> Contact</Link>

//             {/* {loggedinUser ? (
//               <>
//                 <span className="nav-link fw-bold text-primary" style={{color:"red"}}>
//                  welcome..! {loggedinUser.user.displayName || "User"}
//                 </span>
//                 <span className="nav-link logout-link" onClick={logout} style={{ cursor: "pointer" }}>
//                   Logout
//                 </span>
//               </>
//             ) : (
//               <Link to='/login' className="nav-link"><CgProfile /> Login</Link>
//             )} */}
//             {loggedinUser ? (
//   <Dropdown align="end">
//     <Dropdown.Toggle variant="light" id="dropdown-basic" className="profile-dropdown">
//       <CgProfile className="profile-icon" />
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//       <Dropdown.Item as={Link} to="/profile">👤 Profile</Dropdown.Item>
//       <Dropdown.Item as={Link} to="/dashboard">📊 Dashboard</Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item onClick={logout}>🚪 Logout</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
// ) : (
//   <Link to='/login' className="nav-link"><CgProfile /> Login</Link>
// )}

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarComp;
import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaBed, FaUserAlt, FaInfoCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import "./NavbarComp.css";
import { getDoc ,doc} from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";


function NavbarComp() {
  const [role , setRole]=useState("")
    const [loading, setLoading] = useState(true); // To wait until role is fetched

  const navigate = useNavigate();
  const loggedinUser =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(localStorage.getItem("loggedInOwner"));
  console.log(loggedinUser);
   useEffect(() => {
    if (loggedinUser) {
      roleBasedDashBoard();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
  console.log('Role state updated:', role);
}, [role]);


  async function roleBasedDashBoard() {
    try {
      const displayName = loggedinUser?.user?.displayName;
      console.log(displayName,"display.........");
      
      const ownerRef = doc(db, "owners", displayName);
      const userRef = doc(db, "users", displayName);

      const ownerSnap = await getDoc(ownerRef);
      const userSnap = await getDoc(userRef);

      if (ownerSnap.exists()) {
  const data = ownerSnap.data();
  setRole(data.role || "owner");
} else if (userSnap.exists()) {
  const data = userSnap.data();
  setRole(data.role || "user");
} else {
  console.warn("User not found in owners or users.");
}
    } catch (err) {
      console.error("Error fetching role:", err);
    } finally {
      setLoading(false);
    }
  }

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("loggedInOwner");
      
      navigate("/login");
      toast.success("Successfully Logged Out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          🏨 Karthik Coliving
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to="/home" className="nav-link">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="nav-link">
              <FaInfoCircle /> About
            </Link>
            <Link to="/rooms" className="nav-link">
              <FaBed /> Rooms
            </Link>
            <Link to="/contact" className="nav-link">
              <FaUserAlt /> Contact
            </Link>

            {!loading && loggedinUser ? (
              <Dropdown align="end" className="profile-dropdown">
                <Dropdown.Toggle as="div" className="profile-icon-wrapper">
                  <CgProfile className="profile-icon" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-custom">
                  <Dropdown.Item as={Link} to="/profile">
                    👤 Profile
                  </Dropdown.Item>
                  {/* // navigate(`/${loggedUserData.role}Dashboard`); */}
                  <Dropdown.Item
                    as={Link} to={`/${role}Dashboard`}
                  >
                    📊 Dashboard
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logout}>🚪 Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login" className="nav-link">
                <CgProfile /> Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
