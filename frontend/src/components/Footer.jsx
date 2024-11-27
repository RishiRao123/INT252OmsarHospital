import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img
            className='mb-5 w-40'
            src={assets.omsar_updated}
            alt='Omsar Hospital'
          />
          <p className='w-full md:w-2/3 leading-6'>
            Omsar Hospital is dedicated to providing exceptional healthcare
            services with a focus on patient-centered care. Our state-of-the-art
            facilities and experienced medical professionals ensure that every
            patient receives personalized attention and comprehensive treatment.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium text-blue-900 mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-black'>
            <li>
              <a href='/' className='hover:text-primary'>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className='hover:text-primary'>
                About Us
              </a>
            </li>
            <li>
              <a href='/doctors' className='hover:text-primary'>
                Doctors
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-primary'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium text-blue-900 mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-black'>
            <li>+91 1234567890</li>
            <li>omsarhospital@gmail.com</li>
          </ul>
          <div className='flex gap-4 mt-4'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF className='text-primary hover:text-blue-900 text-2xl' />{" "}
              {/* Increased size */}
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-primary hover:text-blue-900 text-2xl' />{" "}
              {/* Increased size */}
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter className='text-primary hover:text-blue-900 text-2xl' />{" "}
              {/* Increased size */}
            </a>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-primary hover:text-blue-900 text-2xl' />{" "}
              {/* Increased size */}
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ Omsar.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
