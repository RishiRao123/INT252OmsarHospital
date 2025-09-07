import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  // Getting User Appointments Data Using API
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });
      setAppointments(data.appointments.reverse());
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function to cancel appointment Using API
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className='pb-3 mt-12 text-2xl font-semibold text-blue-900 border-b'>
        My appointments
      </p>

      {/* If no appointments */}
      {appointments.length === 0 ? (
        <div className='text-center mt-10'>
          <p className='text-2xl font-semibold text-blue-900'>
            No appointments booked
          </p>
          <button
            onClick={() => navigate("/doctors")}
            className='mt-4 text-lg text-white bg-blue-900 px-6 py-2 rounded-full hover:scale-105 transition-all duration-300'
          >
            Book Appointment
          </button>
        </div>
      ) : (
        <div>
          {appointments.map((item, index) => (
            <div
              key={index}
              className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'
            >
              <div>
                <img
                  className='w-36 bg-primary'
                  src={item.docData.image}
                  alt=''
                />
              </div>
              <div className='flex-1 text-sm text-black'>
                <p className='text-blue-900 text-base font-semibold'>
                  {item.docData.name}
                </p>
                <p>{item.docData.speciality}</p>
                <p className='text-blue-900 font-medium mt-1'>Address:</p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p className='mt-1'>
                  <span className='text-sm text-blue-900 font-medium'>
                    Date & Time:
                  </span>{" "}
                  {slotDateFormat(item.slotDate)} | {item.slotTime}
                </p>
              </div>
              <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                {!item.cancelled && !item.isCompleted && (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className='text-black sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'
                  >
                    Cancel appointment
                  </button>
                )}
                {item.cancelled && !item.isCompleted && (
                  <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>
                    Appointment cancelled
                  </button>
                )}
                {item.isCompleted && (
                  <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>
                    Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
