import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className='text-center text-3xl font-large pt-10 text-blue-900'>
        <p>
          CONTACT <span className='text-primary font-semibold'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img
          className='w-full md:max-w-[360px]'
          src={assets.contact_image}
          alt=''
        />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-blue-900'>OUR OFFICE</p>
          <p className='text-black'>
            506317 Palakurthy <br /> Karthikeya Complex, Palakurtyh, Jangaon
          </p>
          <p className='text-black'>
            Tel: +91 1234567890 <br /> Email: omsarhospital@gmail.com
          </p>
          <p className='font-semibold text-lg text-blue-900'>FOLLOW US</p>
          <p className='text-black'>Stay connected with us:</p>
          <div className='flex gap-4'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF className='text-primary hover:text-blue-900 text-2xl' />
            </a>
            <a
              href='https://www.instagram.com/omsar_hospitals/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-primary hover:text-blue-900 text-2xl' />
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter className='text-primary hover:text-blue-900 text-2xl' />
            </a>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-primary hover:text-blue-900 text-2xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
