import React from "react";
import { specialityData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const SpecialityMenu = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div
      id='speciality'
      className='flex flex-col items-center gap-8 py-16 text-[#262626] w-full'
    >
      <h1 className='text-4xl font-semibold text-blue-900'>
        Find by Speciality
      </h1>
      <p className='w-full sm:w-1/2 text-center text-lg text-black'>
        Browse through our extensive list of trusted doctors, Book your
        appointment hassle-free.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 w-full px-4 sm:px-8 lg:px-16'>
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className='flex items-center p-6 rounded-lg bg-white hover:text-blue-900 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img
              className='w-20 h-20 mr-6 rounded-md'
              src={`${item.image}`}
              alt={item.speciality}
            />
            <div className='flex flex-col'>
              <p className='text-xl font-semibold text-blue-900'>
                {item.speciality}
              </p>
              <p className='text-md text-black'>
                {item.description ||
                  "Find specialists and experts for comprehensive care and guidance in this field."}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <button
        className='bg-blue-900 text-white text-lg hover:scale-105 transition-all duration-300 px-12 py-3 rounded-full mt-10'
        onClick={() => {
          navigate("/contact"); // Navigate to the contact page
          scrollTo(0, 0); // Scroll to the top of the page
        }}
      >
        Query?? Ask here
      </button>
    </div>
  );
};

export default SpecialityMenu;
