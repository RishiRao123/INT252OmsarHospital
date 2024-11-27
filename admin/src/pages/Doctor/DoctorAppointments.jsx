import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className='w-full max-w-6xl m-5 bg-gray-100'>
      <p className='mb-3 text-3xl font-semibold text-blue-900'>
        All Appointments
      </p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b text-lg text-blue-900 font-medium'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50'
            key={index}
          >
            <p className='max-sm:hidden text-black text-lg'>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img
                src={item.userData.image}
                className='w-8 rounded-full mr-4'
                alt=''
              />
              <p className='text-lg font-medium text-blue-900'>
                {item.userData.name}
              </p>
            </div>
            <p className='max-sm:hidden font-medium text-primary'>
              {calculateAge(item.userData.dob)}
            </p>
            <p className='text-md text-black'>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>
            <div className='flex items-center gap-2'>
              <img
                src={item.docData.image}
                className='w-8 rounded-full bg-gray-200 mr-4'
                alt=''
              />
              <p className='text-lg font-medium text-blue-900'>
                {item.docData.name}
              </p>
            </div>
            <p className='text-md font-semibold text-primary'>
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className='text-red-500 text-md font-medium'>Cancelled</p>
            ) : item.isCompleted ? (
              <p className='text-green-500 text-md font-medium'>Completed</p>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                className='w-10 cursor-pointer hover:scale-500 transition-all'
                src={assets.cancel_icon}
                alt=''
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
