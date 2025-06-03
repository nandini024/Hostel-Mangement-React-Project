
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Facilities() {
  return (
    <div>
      
      {/* Featured Rooms & Amenities */}
      <section className="featured-rooms my-5">
        <Container>
          <h3 className="text-center mb-4">Our Rooms & Amenities</h3>
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm h-100">
                <Card.Img 
                  variant="top" 
                  src="https://html.merku.love/hosteller/img/index/gallery04.jpg" 
                  alt="Single Room"height={"350px"}
                  

                />
                <Card.Body>
                  <Card.Title>Single Deluxe Room</Card.Title>
                  <Card.Text>Enjoy a cozy, private room designed for your comfort and productivity.
Relax on a comfortable bed that promises restful nights.
Stay focused and organized with a dedicated study desk just for you.</Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm h-100">
                <Card.Img 
                  variant="top" 
                  src="https://2.bp.blogspot.com/-x785E9Q1on0/V9Eb-isEZcI/AAAAAAAAGAk/NPjsuyH6gEQ0b08t7ONmRQb_v3FiWZ1KgCLcB/s1600/IMG_6800.JPG" 
                  alt="Gym" height={"350px"}
                />
                <Card.Body>
                      <Card.Title>Fully Equipped Gym</Card.Title>
      <Card.Text>Stay fit and energized in our modern gym.
Enjoy a motivating environment designed to help you reach your wellness goals.
Refresh your body and mind every day with our top-notch facilities.</Card.Text>

                  <Button variant="primary">Explore</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm h-100">
                <Card.Img 
                  variant="top" 
                  src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/1a1c1308-d1da-4e90-b710-a2c0b2b1fba9/62eeeefd-4cb8-432a-9acd-e6242688f6dc.png" 
                  alt="Study Area"   height={"350px"}
                />
                <Card.Body>
                  <Card.Title>Quiet Study Area</Card.Title>
                  <Card.Text>Immerse yourself in a calm, well-lit space designed for deep focus.
Enjoy minimal distractions and a serene atmosphere to boost your productivity.
Perfect for uninterrupted study sessions and exam preparation.</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
         {/* Testimonials */}
      <section className="testimonials bg-primary text-white py-5">
        <Container>
          <h3 className="text-center mb-4">What Our Residents Say</h3>
          <Row>
            <Col md={4}>
              <Card bg="dark" text="white" className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Text>
                    “Living here has been a wonderful experience! The staff is friendly and the facilities are top-notch.”
                  </Card.Text>
                  <Card.Footer>- Rahul M.</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="white" className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Text>
                    “Safe, clean, and comfortable. The perfect place to focus on my studies.”
                  </Card.Text>
                  <Card.Footer>- Anjali P.</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="white" className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Text>
                    “The lounge and common areas are great for meeting other residents. Highly recommend!”
                  </Card.Text>
                  <Card.Footer>- Suresh K.</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </div>
  )
}

export default Facilities
