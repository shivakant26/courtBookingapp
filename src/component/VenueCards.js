import React from "react";
import { Card, Button } from "react-bootstrap";

function VenueCard({ venue, onBookSlot }) {
  const availableSlots = venue.slots.filter((slot) => slot.available);
  const totalAvailableSlots = availableSlots.length;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{venue.name}</Card.Title>
        <Card.Text>
          <strong>Sports:</strong> {venue.sports}
        </Card.Text>
        <Card.Text>
          <strong>Venue:</strong> {venue.location}
        </Card.Text>
        <Card.Text>{venue.description}</Card.Text>
        <Card.Text>
          <strong>Total Available Slots:</strong> {totalAvailableSlots}
        </Card.Text>
        {totalAvailableSlots > 0 && (
          <Button variant="primary" onClick={() => onBookSlot(venue)}>
            Book Slot
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default VenueCard;
