import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='w-full bg-gray-50 py-20 px-6 sm:px-12 lg:px-20 rounded-lg text-[#262626] mt-16'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-semibold text-blue-900'>
          Top Doctors to Book
        </h1>
      </div>

      {/* Rounded Background Section for Grid */}
      <div className='bg-white rounded-2xl shadow-sm p-8 sm:p-10'>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {doctors.slice(0, 10).map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] hover:shadow-md transition-all duration-500'
            >
              <img
                className='w-full h-48 object-cover bg-primary'
                src={item.image}
                alt=''
              />
              <div className='p-4'>
                {/* Availability */}
                <div
                  className={`flex items-center gap-2 text-sm mb-2 ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></span>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>

                {/* Doctor Info */}
                <p className='text-blue-900 text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className='flex justify-center mt-12'>
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className='bg-blue-900 text-white text-lg font-medium px-12 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
