import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SlotCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [viewAvailableSlots, setViewAvailableSlots] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookeDate, setBookedDate] = useState([]);

  useEffect(() => {
    const availableSlotsCopy = state.venueSlots?.map((val) => ({
      ...val,
      date: initialStartDate,
    }));
    setAvailableSlots(availableSlotsCopy);
  }, [state.venueSlots]);

  const initialStartDate = new Date();
  const bookedDate = new Date(selectedDate);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = bookedDate.toLocaleDateString("en-IN", options);

  const handleBookSlot = (slotIndex, data) => {
    setBookedDate([...bookeDate, { ...data, datetwo: formattedDate }]);
    setSelectedDate(initialStartDate);
    const slots = [...availableSlots];
    slots.splice(slotIndex, 1);
    setAvailableSlots(slots);
    toast.success("Slot Booked successfully");
  };

  return (
    <>
    <Button onClick={()=>navigate("/")}>Back</Button>
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>Slots</Card.Title>
        <div className="mb-2">
          <ButtonGroup>
            <Button
              variant={viewAvailableSlots ? "primary" : "secondary"}
              onClick={() => setViewAvailableSlots(true)}
            >
              Available
            </Button>
            <Button
              variant={!viewAvailableSlots ? "primary" : "secondary"}
              onClick={() => setViewAvailableSlots(false)}
            >
              Booked
            </Button>
          </ButtonGroup>
        </div>
        <ListGroup>
          {viewAvailableSlots ? (
            <>
              {availableSlots.length > 0 ? (
                <>
                  {availableSlots?.map((slot, index) => (
                    <ListGroup.Item
                      key={index}
                      variant="success"
                      className="d-flex justify-content-between align-items-center"
                    >
                      {slot.time} - Available
                      <div className="timepicker">
                        <DatePicker
                          selected={slot.date}
                          onChange={(date) => {
                            let newStartDates = [...availableSlots];
                            newStartDates[index].date = date;
                            setAvailableSlots(newStartDates);
                            setSelectedDate(date);
                          }}
                          minDate={new Date()}
                        />
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => handleBookSlot(index, slot)}
                      >
                        Book
                      </Button>
                    </ListGroup.Item>
                  ))}
                </>
              ) : (
                <p className="message">All slots are booked !</p>
              )}
            </>
          ) : (
            <>
              {bookeDate.length > 0 ? (
                <>
                  {bookeDate?.map((slot, index) => (
                    <ListGroup.Item
                      key={index}
                      variant="danger"
                      className="d-flex justify-content-between align-items-center"
                    >
                      {slot.time} - {slot.datetwo} - Booked
                    </ListGroup.Item>
                  ))}
                </>
              ) : (
                <p className="message">No Slot Booking Yet</p>
              )}
            </>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
    </>
  );
};

export default SlotCard;
