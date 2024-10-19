import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import qrCode from "../assets/img/QrCode.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-20 pb-10 bg-blue-100 w-full rounded-b-3xl shadow-2xl">
      {/* Breadcrumb Navigation */}
      <div className="mb-4 text-gray-500 mt-4">
        <p className=" text-base">
          <a href="/" className=" hover:underline text-gray-700 ">Home</a> &gt; &gt; <span className="text-gray-700 hover:underline">Contact</span>
        </p>
      </div>

      {/* Contact Header */}
      <div className="text-center pb-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Reach Out to Us</h1>
        <p className="text-lg text-gray-600">
          Our team is dedicated to offering you the best eye care services. For any inquiries or to schedule an appointment, feel free to contact us.
        </p>
      </div>
      

      {/* Contact and QR Code Section */}
      <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10 mt-10 w-full">
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-center border-l-4 border-blue-800">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Contact Us</h2>
          <div className="flex flex-col space-y-4">
            <p className="flex items-center justify-center text-gray-600">
              <FaPhoneAlt className="mr-2 text-blue-500" /> +08224254330
            </p>
           <p className="flex flex-wrap items-center justify-center text-gray-600 break-words text-center">
            <FaEnvelope className="mr-2 text-blue-500 text-lg" /> nanjapppaeyehospital.kollegal@gmail.com
           </p>

            <p className="flex items-center justify-center text-gray-600">
              <FaClock className="mr-2 text-blue-500" /> Mon - Sat, 10 AM - 6 PM
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-center border-l-4 border-blue-800">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Pay or Book an Appointment</h2>
          <img
            src={qrCode}
            alt="QR Code"
            className="w-40 h-40 object-contain mx-auto mb-6"
          />
          <p className="text-gray-600">Scan the QR code to make a payment or book an appointment easily.</p>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-10 w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Find Us on the Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.3745462993866!2d77.10483327379809!3d12.15488398809043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf1f4a3d0c99d5%3A0x1f9a1f89b4e4584c!2sNanjappa%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1729069859026!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-4 max-w-xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm  text-gray-700 font-semibold">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm  text-gray-700 font-semibold">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm  text-gray-700 font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
