import React from "react";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="text-2xl font-semibold">
            <span className="inline-block transform font-bold italic -translate-x-5">Nanjappa</span>
            <span className="block text-2xl mt-1 ml-1 font-bold italic -translate-y-2" style={{ color: "#EB3535" }}>
              Eye Hospital
            </span>
          </h1>
          <p className="text-sm mt-4">
            At Nanjappa Eye Hospital, we are dedicated to providing the highest standard of eye care services to our patients. 
            Our mission is to protect and enhance vision through exceptional medical expertise, cutting-edge technology, and compassionate care.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/aboutus"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </a>
            <a
              href="/diseases"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Diseases
            </a>
            <a
              href="/treatments"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Treatments
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="#services-health-check"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </a>
            <a
              href="#services-eye-exams"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Eye Exams
            </a>
            <a
              href="#services-optical-services"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Optical Services
            </a>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a href="https://maps.google.com/?q=Above+Corporation+Bank,+Vivekananda+road,+Kollegala,+Karnataka+571440" target="_blank" rel="noopener noreferrer">
              Above Corporation Bank, Vivekananda road, Kollegala, Karnataka 571440
            </a>
            <a href="mailto:nanjapppaeyehospital@gmail.com">
              nanjapppaeyehospital.kollegal@gmail.com
            </a>
            <a href="tel:+08224254330">
              +08224254330
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-hoverColor"> Amol</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
