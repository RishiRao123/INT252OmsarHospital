import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const { token, backendUrl, userData, setUserData, loadUserProfileData } =
    useContext(AppContext);

  // Function to update user profile data using API
  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData ? (
    <div className='flex items-center justify-center min-h-screen py-10 bg-gray-100'>
      <div className='border border-gray-300 bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='flex flex-col items-center mb-6'>
          <label htmlFor='image' className='cursor-pointer'>
            <img
              src={image ? URL.createObjectURL(image) : userData.image}
              alt='Profile'
              className='w-24 h-24 rounded-full mb-4 border-2 border-gray-300'
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              id='image'
              hidden
            />
          </label>
          {isEdit ? (
            <input
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              type='text'
              className='w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          ) : (
            <p className='text-2xl font-bold text-primary'>{userData.name}</p>
          )}
        </div>

        <hr className='my-6' />

        <div>
          <p className='text-xl font-semibold text-blue-900 mb-2'>
            Contact Information
          </p>

          <div className='mb-4'>
            <p className='text-md text-black'>Email:</p>
            {isEdit ? (
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                type='email'
                className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            ) : (
              <p className='text-blue-900'>{userData.email}</p>
            )}
          </div>

          <div className='mb-4'>
            <p className='text-md text-black '>Phone:</p>
            {isEdit ? (
              <input
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                type='text'
                className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            ) : (
              <p className='text-blue-900'>{userData.phone}</p>
            )}
          </div>

          <div className='mb-4'>
            <p className='text-md text-black'>Address:</p>
            {isEdit ? (
              <div>
                <input
                  type='text'
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='text'
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className='w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            ) : (
              <div>
                <p className='text-blue-900'>{userData.address.line1}</p>
                <p className='text-blue-900'>{userData.address.line2}</p>
              </div>
            )}
          </div>
        </div>

        <div className='my-6'>
          <p className='text-xl font-semibold text-blue-900 mb-2'>
            Basic Information
          </p>

          <div className='mb-4'>
            <p className='text-md text-black'>Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            ) : (
              <p className='text-blue-900'>{userData.gender}</p>
            )}
          </div>

          <div className='mb-4'>
            <p className='text-md text-black'>Date of Birth:</p>
            {isEdit ? (
              <input
                type='date'
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            ) : (
              <p className='text-blue-900'>{userData.dob}</p>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            if (isEdit) {
              updateUserProfileData();
            } else {
              setIsEdit(true);
            }
          }}
          className='w-full py-2 mt-4 bg-primary text-white font-semibold rounded-md hover:bg-orange-400 transition-colors'
        >
          {isEdit ? "Save information" : "Edit"}
        </button>
      </div>
    </div>
  ) : null;
};

export default MyProfile;
