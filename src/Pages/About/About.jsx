import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaBed, FaWifi, FaLock, FaUtensils, FaUsers, FaHeart } from 'react-icons/fa';

import vineethimg from "../../assets/images/vineeth.jpeg"
function AboutSection() {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Experience Elevated Living</h2>
        <p className="text-center text-muted mb-5">
          Welcome to <span className="text-warning fw-semibold">Karthik Coliving Space</span> – where comfort, security, and community come together to offer you a perfect stay.
        </p>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h4 className="fw-bold mb-3">Why Choose Us?</h4>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>✔️ Fully Furnished Private Rooms</Accordion.Header>
                <Accordion.Body>
                  Our rooms come with cozy beds, study tables, wardrobes, and all essential furniture to make your stay comfortable and productive.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>✔️ High-Speed Wi-Fi & Study-Friendly Environment</Accordion.Header>
                <Accordion.Body>
                  We provide reliable and superfast internet to keep you connected. Study peacefully in a quiet, well-lit environment tailored for focus.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>✔️ 24/7 Security with CCTV</Accordion.Header>
                <Accordion.Body>
                  Your safety is our priority! We ensure round-the-clock surveillance and secure entry access with modern safety features.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>✔️ Hygienic & Delicious Food</Accordion.Header>
                <Accordion.Body>
                  Enjoy nutritious, home-style meals prepared with hygiene and love. We serve balanced menus to keep you energized all day!
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>✔️ Friendly Community Vibes</Accordion.Header>
                <Accordion.Body>
                  Meet like-minded roommates and be a part of an engaging, respectful community where friendships flourish.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="text-center g-4">
          <Col md={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <FaBed className="display-4 text-warning mb-3" />
                <Card.Title>Comfortable Rooms</Card.Title>
                <Card.Text>Well-furnished, cozy rooms with study tables and private storage for peaceful living.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <FaWifi className="display-4 text-warning mb-3" />
                <Card.Title>High-Speed Internet</Card.Title>
                <Card.Text>Stay connected with blazing-fast Wi-Fi throughout the property.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <FaLock className="display-4 text-warning mb-3" />
                <Card.Title>24/7 Security</Card.Title>
                <Card.Text>Biometric access, security personnel, and CCTV monitoring ensure your safety.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center g-4 mt-4">
          <Col md={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <FaUtensils className="display-4 text-warning mb-3" />
                <Card.Title>Healthy Meals</Card.Title>
                <Card.Text>Delicious, hygienic food served daily to keep you energized and happy.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <FaUsers className="display-4 text-warning mb-3" />
                <Card.Title>Community Vibes</Card.Title>
                <Card.Text>Feel at home with a friendly, respectful, and vibrant community of residents.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <FaHeart className="display-4 text-warning mb-3" />
                <Card.Title>Homely Atmosphere</Card.Title>
                <Card.Text>We create a warm and caring atmosphere so that every resident feels truly at home.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr className="my-5" />

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <h4 className="fw-bold text-warning">Our Vision & Mission</h4>
            <p className="text-muted mt-3">
              At <strong>Karthik Coliving Space</strong>, our mission is to create a warm, secure, and productive environment where students feel right at home. We envision a community where learning, comfort, and friendship thrive together.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://image.shutterstock.com/image-photo/business-technology-internet-network-concept-260nw-2457931949.jpg"
              alt="Vision"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="mb-5 align-items-center flex-md-row-reverse">
          <Col md={6}>
            <h4 className="fw-bold text-warning">Hygiene & Cleanliness</h4>
            <p className="text-muted mt-3">
              We prioritize cleanliness to create a healthy and safe living environment for all residents. Our team performs daily sanitization of common areas and rooms to keep everything spotless. Washrooms are cleaned frequently, and fresh linen is provided regularly to ensure comfort. We follow strict waste management practices to maintain hygiene and protect the environment. At Karthik Coliving Space, clean and fresh surroundings help you focus on your studies and enjoy your stay worry-free.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://image.shutterstock.com/image-photo/cleaner-female-homeowner-tidying-home-260nw-2479511663.jpg"
              alt="Hygiene"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="mb-5 text-center">
          <h4 className="fw-bold text-warning mb-4">Meet The Team</h4>
          <Col md={4} className="mx-auto">
            <img
              src="https://www.10000coders.in/_next/image?url=%2FwhyJoin_images%2Fcard1.webp&w=1920&q=75"
              className="rounded-circle shadow mb-2"
              width="120"
              height="120"
              alt="Owner"
            />
            <h6 className="fw-semibold mt-2">Miss. Nandini </h6>
            <p className="text-muted small">Founder & Manager</p>
          </Col>
        </Row>
        <Row className="mb-5 text-center">
         
          <Col md={4} className="mx-auto">
            <img
              src={vineethimg}
              className="rounded-circle shadow mb-2"
              width="120"
              height="120"
              alt="Owner"
            />
            <h6 className="fw-semibold mt-2">Mr. Vineeth Kumar </h6>
            <p className="text-muted small">Assist.Manager</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <h4 className="fw-bold text-center text-warning mb-4">What Our Residents Say</h4>
          <Col>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active text-center">
                  <blockquote className="blockquote">
                    <p className="mb-2">“A super cozy and peaceful environment. Feels just like home!”</p>
                    <footer className="blockquote-footer">Sandeep, Student at NIT</footer>
                  </blockquote>
                </div>
                <div className="carousel-item text-center">
                  <blockquote className="blockquote">
                    <p className="mb-2">“Great Wi-Fi, great food, and friendly people. 10/10!”</p>
                    <footer className="blockquote-footer">Praveen, Software Intern</footer>
                  </blockquote>
                </div>
                <div className="carousel-item text-center">
                  <blockquote className="blockquote">
                    <p className="mb-2">“Safe and very clean — I’d recommend this place to anyone.”</p>
                    <footer className="blockquote-footer">Rahul, MBA Student</footer>
                  </blockquote>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;


