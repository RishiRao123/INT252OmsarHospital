import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl } = useContext(AppContext);
  const { aToken } = useContext(AdminContext);

  useEffect(() => {
    // Clean up the object URL after the component unmounts
    return () => {
      if (docImg) {
        URL.revokeObjectURL(docImg);
      }
    };
  }, [docImg]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!docImg) {
      return toast.error("Image Not Selected");
    }

    try {
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        // Reset form fields
        setDocImg(null);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setAbout("");
        setSpeciality("General physician");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-3xl font-semibold text-blue-900'>Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor='doc-img'>
            <img
              className='w-16 bg-gray-100 rounded-full cursor-pointer'
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt='Upload doctor'
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type='file'
            id='doc-img'
            hidden
            accept='image/*'
          />
          <p className='text-blue-900'>
            Upload doctor <br /> <span className='text-primary'>picture</span>
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-100'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Your name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='border rounded px-3 py-2 text-black'
                type='text'
                placeholder='Name'
                required
              />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='border rounded px-3 py-2 text-black'
                type='email'
                placeholder='Email'
                required
              />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Set Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='border rounded px-3 py-2 text-black'
                type='password'
                placeholder='Password'
                required
              />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className='border rounded px-2 py-2 text-black'
              >
                {[...Array(10).keys()].map((year) => (
                  <option key={year} value={`${year + 1} Year`}>{`${
                    year + 1
                  } Year`}</option>
                ))}
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className='border rounded px-3 py-2 text-black'
                type='number'
                placeholder='Doctor fees'
                required
              />
            </div>
          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className='border rounded px-2 py-2 text-black'
              >
                {[
                  "General physician",
                  "Gynecologist",
                  "Dermatologist",
                  "Pediatricians",
                  "Neurologist",
                  "Gastroenterologist",
                ].map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Degree</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className='border rounded px-3 py-2 text-black'
                type='text'
                placeholder='Degree'
                required
              />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-blue-900'>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className='border rounded px-3 py-2 text-black'
                type='text'
                placeholder='Address 1'
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className='border rounded px-3 py-2 text-black'
                type='text'
                placeholder='Address 2'
              />
            </div>
          </div>
        </div>

        <p className='mt-4 mb-2'>About Doctor</p>
        <textarea
          onChange={(e) => setAbout(e.target.value)}
          value={about}
          className='w-full px-4 pt-2 border rounded'
          rows={5}
          placeholder='Write about doctor'
        ></textarea>
      </div>

      <button
        type='submit'
        className='bg-primary px-10 py-3 mt-4 text-white rounded-full'
      >
        Add doctor
      </button>
    </form>
  );
};

export default AddDoctor;
