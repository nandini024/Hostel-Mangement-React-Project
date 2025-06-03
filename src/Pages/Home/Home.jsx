import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HostelCarousel from '../../Components/Home corrosors/HostelCarousel';
import Facilities from './Facilities/Facilities';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
   const handleBookNow = () => {
    navigate('/login'); 
  };
  return (
    <>
      <HostelCarousel />
      <Facilities/>

      


    

      {/* Gallery */}
      <section className="gallery my-5">
        <Container>
          <h3 className="text-center mb-4">Discover Our Spaces...✨</h3>
          <Row className="g-3">
            <Col md={4}>
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
                alt="Hostel Exterior"
                className="img-fluid rounded shadow-sm" 
              />
            </Col>
            <Col md={4}>
              <img
                src="https://www.guggach.com/assets/images/3/header-slide5-kueche-top6-3840-6e2f57dc.webp"
                alt="Study Space"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col md={4}>
              <img
  src="https://html.merku.love/hosteller/img/gallery/full09.jpg"
  alt="Common Lounge"
  className="img-fluid rounded shadow-sm"
  style={{ height: '280px',width:"400px"}}
/>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta text-center py-5 bg-warning">
        <Container>
          <h3>Ready to experience the best hostel living?</h3>
          <Button variant="dark" size="lg" className="mt-3" onClick={handleBookNow}>
      Book Your Stay Now
    </Button>
        </Container>
      </section>
    </>
  );
}

export default Home;
