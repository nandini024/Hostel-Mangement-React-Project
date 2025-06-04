import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaBed, FaUserAlt, FaInfoCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './NavbarComp.css';

function NavbarComp() {
  const navigate = useNavigate();
  const loggedinUser = JSON.parse(localStorage.getItem("loggedInUser")) || JSON.parse(localStorage.getItem("loggedInOwner"));

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
          🏨 Karthik PG For Men
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to='/home' className="nav-link"><FaHome /> Home</Link>
            <Link to='/about' className="nav-link"><FaInfoCircle /> About</Link>
            <Link to='/rooms' className="nav-link"><FaBed /> Rooms</Link>
            <Link to='/contact' className="nav-link"><FaUserAlt /> Contact</Link>

            {loggedinUser ? (
              <>
                <span className="nav-link fw-bold text-primary" style={{color:"red"}}>
                 welcome..! {loggedinUser.user.displayName || "User"}
                </span>
                <span className="nav-link logout-link" onClick={logout} style={{ cursor: "pointer" }}>
                  Logout
                </span>
              </>
            ) : (
              <Link to='/login' className="nav-link"><CgProfile /> Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
