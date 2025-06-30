import React, { useState } from "react";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";
import "./SignupPage.css";
import { db } from "../../Components/firebaseConfig/firebaseConfig";
import { authentication } from "../../Components/firebaseConfig/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast ,ToastContainer} from "react-toastify";

function Signup() {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userRegistration = await createUserWithEmailAndPassword(
        authentication,
        signupDetails.email,
        signupDetails.password
      );

      await updateProfile(userRegistration.user, {
        displayName: signupDetails.name,
      });

      await setDoc(doc(db, `${signupDetails.role}s`, signupDetails.name), {
        name: signupDetails.name,
        email: signupDetails.email,
        role: signupDetails.role,
        id: userRegistration.user.uid,
      });

      toast.success("Signup Successful! Redirecting to Login Page...", {
         position: "top-right",
        autoClose: 3000
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("❗ Email already in use", { position: "top-center" });
      } else if (error.code === "auth/weak-password") {
        toast.error("❗ Password should be at least 6 characters", {
          position: "top-center",
        });
      } else {
        toast.error("❗ Signup Failed. Please try again.", {
          position: "top-center",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-95">
        <Card className="signup-card shadow-lg">
          <h2 className="text-center mb-4 signup-title">Sign Up</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>
                <FaUser className="icon" /> Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                className="signup-input"
                onChange={(e) =>
                  setSignupDetails({ ...signupDetails, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>
                <MdEmail className="icon" /> Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                className="signup-input"
                onChange={(e) =>
                  setSignupDetails({ ...signupDetails, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>
                <FaLock className="icon" /> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                required
                className="signup-input"
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    password: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>🎭 Role</Form.Label>
              <Form.Select
                required
                onChange={(e) =>
                  setSignupDetails({ ...signupDetails, role: e.target.value })
                }
              >
                <option value="">Choose your role</option>
                <option value="owner">Owner</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 signup-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Signing Up...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </Form>

          <p className="mt-3 text-center signup-footer">
            Already registered?{" "}
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </p>
        </Card>
      </Container>
      <ToastContainer/>
    </div>
  );
}

export default Signup;
