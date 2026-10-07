import React from "react";
import { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ name, date });
    setName("");
    setDate("");
  };

  return (
    <>
      <div className="container">
        <h1>Appointment Management System</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fName">Full Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fName"
                placeholder="Your Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="date">Appointment Date</label>
            </div>
            <div className="col-75">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <button type="submit">Add Appointment</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
