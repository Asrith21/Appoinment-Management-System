import react, { useState } from "react";
import AppointmentForm from "./components/appointmentForm";
import AppointmentList from "./components/appointmentList";
import "./App.css";

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const delAppointment = (index) => {
    const delAppointments = [...appointments];
    delAppointments.splice(index, 1);
    setAppointments(delAppointments);
  };

  const editAppointment = (index, editedName, editedDate) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = {
      name: editedName,
      date: editedDate,
    };
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList
        appointments={appointments}
        deleteAppointment={delAppointment}
        editAppointment={editAppointment}
        clearAppointments={clearAppointments}
      />
    </>
  );
};

export default App;
