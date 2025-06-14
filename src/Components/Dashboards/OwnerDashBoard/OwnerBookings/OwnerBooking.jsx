import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import "./OwnerBookings.css";

function OwnerBooking() {
  const [viewBookedRoomData, setBookedRoomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleConfirm = async (bookingId, userId) => {
  await updateDoc(doc(db, "bookings", bookingId), {
    status: "confirmed"
  });

  await updateDoc(doc(db, "users", userId), {
    bookingStatus: "confirmed"
  });
};

const handleCancel = async (bookingId, userId) => {
  await updateDoc(doc(db, "bookings", bookingId), {
    status: "cancelled"
  });

  await updateDoc(doc(db, "users", userId), {
    bookingStatus: "cancelled"
  });
};


  useEffect(() => {
    const fetchBookedRoomData = async () => {
      try {
        const getBookedRoomData = collection(db, "users");
        const getBookedroomRef = await getDocs(getBookedRoomData);

        const bookedRoomsData = [];

        getBookedroomRef.docs.forEach((doc) => {
          const user = doc.data();
          const userRooms = user.bookedRooms || [];

          userRooms.forEach((room) => {
            bookedRoomsData.push({
              ...room,
              bookedBy: user.name,
              email: user.email
            });
          });
        });

        setBookedRoomsData(bookedRoomsData);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
      setLoading(false);
    };

    fetchBookedRoomData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading... please wait...</p>
      </div>
    );
  }

  return (
    <Container className="owner-bookings-container">
      <h2 className="text-center owner-booking-title">📦 Owner Booked Rooms</h2>
      <Row>
        {viewBookedRoomData.map((room, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="owner-card h-100">
              <Card.Img
                variant="top"
                src={room.images}
                className="owner-card-img"
              />
             <Card.Body className="owner-card-body">
  <Card.Title className="owner-card-title">{room.roomType} Room</Card.Title>
  <Card.Text className="owner-card-text"><strong>Room No:</strong> {room.roomNumber}</Card.Text>
  <Card.Text className="owner-card-text"><strong>Description:</strong> {room.description}</Card.Text>
  <Card.Text className="owner-card-text"><strong>Capacity:</strong> {room.capacity}</Card.Text>
  <Card.Text className="owner-card-text">
    <strong>Availability:</strong>{" "}
    <span className={room.availability === "Available" ? "text-success" : "text-danger"}>
      {room.availability}
    </span>
  </Card.Text>
  <Card.Text className="owner-card-text"><strong>Price:</strong> ₹{room.price}</Card.Text>
  <Card.Text className="owner-card-text"><strong>Booked By:</strong> {room.bookedBy}</Card.Text>
  <Card.Text className="owner-card-text"><strong>Email:</strong> {room.email}</Card.Text>
  <Card.Text className="owner-card-text">
    <strong>Amenities:</strong>{" "}
    {room.amenities?.length > 0 ? room.amenities.join(', ') : "N/A"}
  </Card.Text>

  <div className="d-flex justify-content-between mt-3">
    <button
      className="btn btn-success btn-sm"
      onClick={handleConfirm }
    >
      Confirm
    </button>
    <button
      className="btn btn-danger btn-sm"
      onClick={handleCancel}
    >
      Cancel
    </button>
  </div>
</Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OwnerBooking;
