import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-1 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/">
              <h1 className="text-2xl font-semibold">
                <span className="inline-block transform font-bold italic -translate-x-5">Nanjappa</span>
                <span className="block text-2xl mt-1 ml-1 font-bold italic -translate-y-2" style={{ color: "#EB3535" }}>
                  Eye Hospital
                </span>
              </h1>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-8">
            <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
              <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer">
                Home
              </Link>
              <Link to="/about" className="hover:text-hoverColor transition-all cursor-pointer">
                About Us
              </Link>
              <Link to="/doctors" className="hover:text-hoverColor transition-all cursor-pointer">
                Doctors
              </Link>
              <Link to="/treatments" className="hover:text-hoverColor transition-all cursor-pointer">
                Treatments
              </Link>
              <Link to="/diseases" className="hover:text-hoverColor transition-all cursor-pointer">
                Diseases
              </Link>
            </nav>

            <div className="hidden lg:flex">
              <Link
                to="/contact"
                className="hover:text-hoverColor text-xl transition-all cursor-pointer"
                onClick={openForm}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/doctors"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="/treatments"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Treatments
          </Link>
          <Link
            to="/diseases"
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Diseases
          </Link>

          <div className="lg:hidden">
            <Link
              to="/contact"
              className="hover:text-hoverColor transition-all cursor-pointer"
              onClick={openForm}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
