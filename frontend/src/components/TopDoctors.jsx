import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
      <h1 className='text-4xl font-semibold mb-12   text-blue-900'>
        Top Doctors to Book
      </h1>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className='border border-grey rounded-xl overflow-hidden cursor-pointer  hover:border-collapse hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img className='bg-primary' src={item.image} alt='' />
            <div className='p-4'>
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></p>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <p className='text-blue-900 text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className='bg-blue-900 text-white text-lg hover:scale-105 transition-all duration-300 px-12 py-3 rounded-full mt-10'
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;

//bg-[#EAEFFF]
