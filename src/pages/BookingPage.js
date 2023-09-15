import React, { useEffect, useState } from "react";
import venues from "../jsondata/allvenues";
import { useNavigate } from "react-router-dom";
import VenueCard from "../component/VenueCards";
import { Form, FormCheck } from "react-bootstrap";

const BookingPage = () => {
  const navigate = useNavigate();

  const [isToggle, setIsToggle] = useState(false);
  const [data, setData] = useState([]);
  const handleBookSlot = (venue) => {
    navigate(`/slots`, {
      state: { venueSlots: venue.slots, name: venue.name },
    });
  };

  const handleChange = (e) => {
    let val = false;
    if (e.target.value === "false") {
      val = true;
    }
    setIsToggle(val);
  };

  useEffect(() => {
    const list = venues?.filter((type) =>
      isToggle ? type?.sports === "Pickleball" : type?.sports === "Tennis"
    );
    setData([...list]);
  }, [isToggle]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Court Booking</h1>
        <h4>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Slide for Pickleball"
            value={isToggle}
            onChange={handleChange}
          />
        </h4>
      </div>
      <div className="row">
        {data?.map((venue, index) => (
          <div key={index} className="col-md-6">
            <VenueCard venue={venue} onBookSlot={handleBookSlot} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BookingPage;
