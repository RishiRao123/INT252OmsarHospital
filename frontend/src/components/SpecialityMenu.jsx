import React from "react";
import { specialityData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const SpecialityMenu = () => {
  const navigate = useNavigate();

  return (
    <div
      id='speciality'
      className='w-full py-16 px-6 sm:px-12 lg:px-20 rounded-lg bg-gray-50 text-[#262626]'
    >
      {/* Header Section */}
      <div className='text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold text-blue-900 mb-4'>
          Find by Speciality
        </h1>
        <p className='text-lg text-gray-700'>
          Browse through our extensive list of trusted doctors, and book your
          appointment hassle-free.
        </p>
      </div>

      {/* Specialities Grid */}
      <div className='mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className='group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer'
          >
            {/* Image with overlay */}
            <div className='relative h-40 w-full'>
              <img
                src={item.image}
                alt={item.speciality}
                className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-70'></div>
            </div>

            {/* Content */}
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-blue-900'>
                {item.speciality}
              </h3>
              <p className='mt-2 text-gray-700 text-sm leading-relaxed'>
                {item.description ||
                  "Find specialists and experts for comprehensive care and guidance in this field."}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className='flex justify-center mt-16'>
        <button
          className='bg-blue-900 text-white text-lg font-medium px-10 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
        >
          Query? Ask here
        </button>
      </div>
    </div>
  );
};

export default SpecialityMenu;
