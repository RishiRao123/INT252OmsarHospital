import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

// Banner component
const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-20 my-20'>
      <div className='flex items-center justify-between'>
        {/* left side */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24'>
          <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-blue-900'>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
          </div>
          <button
            onClick={() => {
              navigate("/login");
              window.scrollTo(0, 0);
            }}
            className='bg-blue-900 text-lg sm:text-base text-white px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
          >
            Create account
          </button>
        </div>

        {/* right side */}
        <div className='hidden md:flex md:w-1/2 lg:w-[370px] items-end justify-end'>
          <img
            className='w-full max-w-md'
            src={assets.appointment_img}
            alt='Appointment'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
