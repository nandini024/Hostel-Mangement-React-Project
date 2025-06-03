import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";


import { FaUser, FaLock } from "react-icons/fa";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  authentication,
  db,
} from "../../Components/firebaseConfig/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import "./Login.css";
function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: " ",
  });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userLogin = await signInWithEmailAndPassword(
        authentication,
        loginDetails.email,
        loginDetails.password
      );
      

      const displayName = userLogin.user.displayName;

      console.log(userLogin);
      const ownerData = await getDoc(
        doc(db, "owners", userLogin.user.displayName)
      );
      const userData=await getDoc(doc(db,"users",userLogin.user.displayName));
      console.log(ownerData);
      // console.log((userData.data()));
      let loggedUserData;
      if (ownerData.exists()) {
        loggedUserData = ownerData.data();
        localStorage.setItem("loggedInOwner", JSON.stringify(userLogin));
        console.log(loggedUserData);
      }else if(userData.exists()){
        loggedUserData = userData.data();
        localStorage.setItem("loggedInUser", JSON.stringify(userLogin));

      }
      navigate(`/${loggedUserData.role}Dashboard`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-95">
        <Card className="login-card shadow-lg">
          <h2 className="text-center mb-4 login-title">Login </h2>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>
                {" "}
                <MdEmail className="icon" /> Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                className="login-input"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>
                <FaLock className="icon" /> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
                className="login-input"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, password: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 login-btn">
              Login
            </Button>
          </Form>

          <p className="mt-3 text-center login-footer">
            Not yet registered?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up here
            </Link>
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
