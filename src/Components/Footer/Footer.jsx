import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css'; 
function Footer() {
  return (
    <Row className="mt-5">
      <Col className="footer-container">
        <small>
          &copy; {new Date().getFullYear()} 
          <span className="footer-highlight"> Karthik Coliving Space</span> &nbsp;|&nbsp; All Rights Reserved 💼
        </small>
        <br />
        <small className="footer-credit">
          Developed By 
          <a 
            href="https://www.linkedin.com/in/nandini-myakala24/" 
            className="footer-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {' '}Nandini.....!💖
          </a>
        </small>
      </Col>
    </Row>
  );
}


export default Footer;
