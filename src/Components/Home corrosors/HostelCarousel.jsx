import React from "react";
import { Carousel, Container } from "react-bootstrap";

function HostelCarousel() {
  return (
    <div className="w-100 " >
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="  https://html.merku.love/hosteller/img/rooms/01.webp"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Luxury Dorm Rooms</h3>
            <p>Experience comfort and elegance in every corner.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Luxury Dorm Room"
           
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Modern & Stylish Corridors</h3>
            <p>Well-lit and spacious hallways for your comfort.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Elegant Study Space"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Elegant Study Areas</h3>
            <p>Focus in beautifully designed study spaces.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/03/e2/df/common-area.jpg?w=1000&h=-1&s=1" 
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Luxury Common Lounge</h3>
            <p>Relax and socialize in style.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        {/* Welcome Section */}
      <section className="welcome-section text-center py-5 bg-light">
        <Container>
          <h2 className="mb-3">"Step Into Comfort at Karthik PG – Where Luxury Meets Lifestyle!"</h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Discover a luxurious and comfortable living experience with 24/7 security, fast Wi-Fi, and a vibrant community.
            Enjoy a premium stay with top-class amenities, warm hospitality, and a space designed for your peace and productivity.
          </p>
        </Container>
      </section>
      </div>
    </div>
  );
}

export default HostelCarousel; 