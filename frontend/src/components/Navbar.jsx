import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  const handleOptionClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className='flex items-center justify-between py-3 px-6 bg-white mb-5'>
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className='w-40 cursor-pointer'
        src={assets.omsar_updated}
        alt='App Logo'
      />

      {/* Navigation Links */}
      <ul className='hidden md:flex items-center gap-8 font-medium text-lg'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 pb-1"
              : "text-blue-900 hover:text-orange-600"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to='/doctors'
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 pb-1"
              : "text-blue-900 hover:text-orange-600"
          }
        >
          ALL DOCTORS
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 pb-1"
              : "text-blue-900 hover:text-orange-600"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 pb-1"
              : "text-blue-900 hover:text-orange-600"
          }
        >
          CONTACT
        </NavLink>
      </ul>

      {/* Right Side - Account or Menu */}
      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div
            className='relative flex items-center gap-2 cursor-pointer dropdown'
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            {/* User Profile Icon */}
            <img
              className='w-8 h-8 rounded-full'
              src={userData.image}
              alt='User'
            />
            <img
              className='w-3 h-3'
              src={assets.dropdown_icon}
              alt='Dropdown'
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className='absolute top-12 right-0 bg-white border rounded-lg shadow-lg text-gray-700 w-40 max-h-60 overflow-y-auto'>
                <div
                  className='cursor-pointer text-lg text-blue-900 hover:bg-blue-900 hover:text-white rounded-lg p-2 transition-colors duration-200'
                  onClick={() => {
                    handleOptionClick("/my-profile");
                  }}
                >
                  My Profile
                </div>

                <div
                  className='cursor-pointer text-lg text-blue-900 hover:bg-blue-900 hover:text-white rounded-lg p-2 transition-colors duration-200'
                  onClick={() => {
                    handleOptionClick("/my-appointments");
                  }}
                >
                  My Appointments
                </div>

                <div
                  className='cursor-pointer text-lg text-blue-900 hover:bg-blue-900 hover:text-white rounded-lg p-2 transition-colors duration-200'
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className='bg-blue-900 text-white px-6 py-2 rounded-full hidden md:block hover:bg-primary-dark transition'
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden cursor-pointer'
          src={assets.menu_icon}
          alt='Menu'
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 bg-white z-20 p-5 transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex items-center justify-between mb-6'>
          <img src={assets.omsar_updated} className='w-32' alt='Logo' />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className='w-6 cursor-pointer'
            alt='Close Menu'
          />
        </div>
        <ul className='flex flex-col items-start gap-4 text-lg font-medium text-blue-900'>
          <NavLink
            onClick={() => setShowMenu(false)}
            to='/'
            className='hover:text-primary transition'
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to='/doctors'
            className='hover:text-primary transition'
          >
            ALL DOCTORS
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to='/about'
            className='hover:text-primary transition'
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to='/contact'
            className='hover:text-primary transition'
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
