import React, { useState } from "react";

const AppointmentList = ({
  appointments,
  deleteAppointment,
  editAppointment,
  clearAppointments,
}) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedName(appointments[index].name);
    setEditedDate(appointments[index].date);
  };

  const handleSaveEdit = (index) => {
    editAppointment(index, editedName, editedDate);
    setEditedIndex(null);
    setEditedName("");
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedName("");
  };

  return (
    <>
      <div className="container">
        <h2>Appointment List</h2>
        <table id="list">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Data</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editedIndex === index ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    appointment.name
                  )}
                </td>
                <td>
                  {editedIndex === index ? (
                    <input
                      type="text"
                      value={editedDate}
                      onChange={(e) => setEditedDate(e.target.value)}
                    />
                  ) : (
                    appointment.date
                  )}
                </td>
                <td>
                  {editedIndex === index ? (
                    <div>
                      <button onClick={() => handleSaveEdit(index)}>
                        Save
                      </button>
                      <button onClick={() => handleCancelEdit}>Cancel</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => deleteAppointment(index)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppointmentList;
