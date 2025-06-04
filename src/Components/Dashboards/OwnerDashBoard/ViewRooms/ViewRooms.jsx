import React from 'react';
import RoomCard from './RoomCard'; // The RoomCard UI component I shared earlier

function ViewRooms({ rooms, onEdit, onDelete }) {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">View Rooms</h2>

      {rooms.length === 0 ? (
        <p className="text-center text-muted fs-5">
          No rooms found. Please add rooms first.
        </p>
      ) : (
        <div className="row">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewRooms;
