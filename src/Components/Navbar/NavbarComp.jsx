import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import "./NavbarComp.css";

function NavbarComp() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();
  const loggedinUser =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(localStorage.getItem("loggedInOwner"));

  // Handle dropdown hover states
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const keepDropdownOpen = () => {
    clearTimeout(dropdownTimeout);
  };

  useEffect(() => {
    if (loggedinUser) {
      roleBasedDashBoard();
    } else {
      setLoading(false);
    }
  }, [loggedinUser]);

  async function roleBasedDashBoard() {
    try {
      const displayName = loggedinUser?.user?.displayName;
      const ownerRef = doc(db, "owners", displayName);
      const userRef = doc(db, "users", displayName);

      const [ownerSnap, userSnap] = await Promise.all([
        getDoc(ownerRef),
        getDoc(userRef),
      ]);

      if (ownerSnap.exists()) {
        setRole("owner");
      } else if (userSnap.exists()) {
        setRole("user");
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

  const goToDashboard = () => {
    navigate(role === "owner" ? "/ownerDashboard" : "/userDashboard");
  };

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          <span className="logo-icon">🏨</span>
          <span className="logo-text">Karthik Coliving</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            {loggedinUser && (
              <Link to="/userDashboard/user_view_rooms" className="nav-link">Rooms</Link>
            )}
            
            <Link to="/contact" className="nav-link">Contact</Link>

            {!loading && loggedinUser ? (
              <div 
                className="profile-dropdown-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="profile-toggle"
                  onClick={goToDashboard}
                >
                  <div className="profile-content">
                    <div className="avatar">
                      {loggedinUser.user.displayName.charAt(0).toUpperCase()}
                    </div>
                    <div className="profile-name">
                      {loggedinUser.user.displayName.split(" ")[0]}
                    </div>
                    <div className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>
                      ▼
                    </div>
                  </div>
                </div>

                {dropdownOpen && (
                  <div 
                    className="dropdown-menu-advanced"
                    onMouseEnter={keepDropdownOpen}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown-profile-header">
                      <div className="dropdown-avatar">
                        {loggedinUser.user.displayName.charAt(0).toUpperCase()}
                      </div>
                      <div className="dropdown-name">
                        {loggedinUser.user.displayName}
                      </div>
                      <div className="dropdown-email">
                        {loggedinUser.user.email}
                      </div>
                    </div>
                    
                    <div className="dropdown-divider"></div>
                    
                    <div 
                      className="dropdown-item" 
                      onClick={() => {
                        goToDashboard();
                        setDropdownOpen(false);
                      }}
                    >
                      Dashboard
                    </div>
                    <div 
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/profile");
                        setDropdownOpen(false);
                      }}
                    >
                      My Profile
                    </div>
                    
                    <div className="dropdown-divider"></div>
                    
                    <div 
                      className="dropdown-item logout-item" 
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="login-button">
                Login/Signup
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;