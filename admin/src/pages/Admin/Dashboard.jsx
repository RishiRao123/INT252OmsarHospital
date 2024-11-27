import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className='m-5 bg-gray-100'>
        <div className='flex flex-wrap gap-3'>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={assets.doctor_icon} alt='' />
            <div>
              <p className='text-2xl font-semibold text-primary'>
                {dashData.doctors}
              </p>
              <p className='text-blue-900 text-xl'>Doctors</p>
            </div>
          </div>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={assets.appointments_icon} alt='' />
            <div>
              <p className='text-2xl font-semibold text-primary'>
                {dashData.appointments}
              </p>
              <p className='text-blue-900 text-xl'>Appointments</p>
            </div>
          </div>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={assets.patients_icon} alt='' />
            <div>
              <p className='text-2xl font-semibold text-primary'>
                {dashData.patients}
              </p>
              <p className='text-blue-900 text-xl'>Patients</p>
            </div>
          </div>
        </div>

        <div className='bg-white'>
          <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
            <img src={assets.list_icon} alt='' />
            <p className='font-semibold text-2xl text-blue-900'>
              Latest Bookings
            </p>
          </div>

          <div className='pt-4 border border-t-0'>
            {dashData.latestAppointments.slice(0, 5).map((item, index) => (
              <div
                className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100'
                key={index}
              >
                <img
                  className='rounded-full w-10'
                  src={item.docData.image}
                  alt=''
                />
                <div className='flex-1 text-sm'>
                  <p className='text-blue-900 text-lg font-semibold'>
                    {item.docData.name}
                  </p>
                  <p className='text-black text-md'>
                    Booking on {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                ) : item.isCompleted ? (
                  <p className='text-green-500 text-xs font-medium'>
                    Completed
                  </p>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className='w-10 cursor-pointer'
                    src={assets.cancel_icon}
                    alt=''
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
