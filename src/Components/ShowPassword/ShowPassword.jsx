import React from "react";
import { Form } from "react-bootstrap";

function ShowPassword() {
  return (
    <div>
      <Form.Control
        type="password"
        placeholder="Create a password"
        required
        className="signup-input"
      />
    </div>
  );
}

export default ShowPassword;
